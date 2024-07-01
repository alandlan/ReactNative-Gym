import { HistoryCard } from "@components/HistoryCard";
import { Loading } from "@components/Loading";
import { ScreenHeader } from "@components/ScreenHeader";
import { ToastCustom } from "@components/ToastCustom";
import { HistoryByDayDTO } from "@dtos/HistoryByDayDTO";
import { Heading, SectionList, VStack, useToast } from "@gluestack-ui/themed";
import { useFocusEffect } from "@react-navigation/native";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { useCallback, useState } from "react";

export function History() {
  const [isLoading, setIsLoading] = useState(true);
  const [exercices, setExercices] = useState<HistoryByDayDTO[]>([] as HistoryByDayDTO[])

  const toast = useToast();

  async function fetchHistory() {
    try {
      setIsLoading(true);
      const response = await api.get("/history");
      setExercices(response.data);
      
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Náo foi possivel buscar o historico de exercicios";

      return toast.show({
        placement: "bottom",
        render: ({ id }) => {
          const toastId = "toast-" + id;
          return (
            <ToastCustom id={toastId} message={title} type="error"/>
          );
        },
      });
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchHistory();
  }, []));

  return (
    <VStack flex={1}>
        <ScreenHeader title="Historico de Exercicios" />

        { 
          isLoading ? <Loading /> :
        
          <SectionList 
            sections={exercices}
            keyExtractor={(item) => item as string}
            renderItem={({item}) => <HistoryCard />}
            renderSectionHeader={({section}) => (
              <Heading fontFamily="$heading" color="$gray200" fontSize={"$md"} mt={10} mb={3}>
                {section.title}
              </Heading>
            )}
            px={16}
            contentContainerStyle={exercices.length === 0 && {flex: 1, justifyContent: "center"}}
            ListEmptyComponent={
              <Heading fontFamily="$heading" color="$gray200" fontSize={"$md"} mt={10} mb={3} textAlign="center">
                Nenhum exercicio encontrado
              </Heading>
            }
          />
        }
    </VStack>
  );
}