import { ErrorToast } from "@components/ErrorToast";
import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList, HStack, Heading, Text, VStack, useToast } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { useEffect, useState } from "react";


export function Home() {
  const [groups, setGroups] = useState<string[]>([]);
  const [exercises, setExercises] = useState(["Remada lateral","Desenvolvimento","Rosca direta","Tríceps testa"]);
  const [groupSelected, setGroupSelected] = useState("costa");

  const toast = useToast();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExercise() {
    navigation.navigate("Exercise");
  }

  async function fetchGroups() {
    try {
      const response = await api.get("/groups");
      setGroups(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Erro ao buscar grupos";

      return toast.show({
        placement: "bottom",
        render: ({ id }) => {
          const toastId = "toast-" + id;
          return (
            <ErrorToast id={toastId} message={title} />
          );
        },
      });

    } 
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <VStack flex={1}>
        <HomeHeader />

        <FlatList 
          data={groups}
          keyExtractor={(item) => item as string}
          renderItem={({item}) => (
            <Group 
              name={item as string} 
              isActive={groupSelected === item} 
              onPress={() => setGroupSelected(item as string)}/>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 16}}
          my={16}
          maxHeight={32}
          minHeight={32}
        />

        <VStack flex={1} px={16}>
          <HStack justifyContent="space-between" marginBottom={10}>
            <Heading fontFamily="$heading" color="$gray200" fontSize="$md">Exercícios</Heading>

            <Text color="$gray200" fontSize={"$md"}>
              {exercises.length}
            </Text>
          </HStack>

          <FlatList 
            data={exercises}
            keyExtractor={(item) => item as string}
            renderItem={({item}) => (
              <ExerciseCard onPress={handleOpenExercise} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 10}}
          />

        </VStack>
        

          
    </VStack>

    
  );
}