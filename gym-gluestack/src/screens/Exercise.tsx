import { ArrowLeftIcon, Box, HStack,Heading,Icon,Image,ScrollView,Text, VStack, useToast } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { TouchableOpacity } from "react-native";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";
import { ErrorToast } from "@components/ErrorToast";
import { api } from "@services/api";
import { useEffect, useState } from "react";
import { ExerciseDTO } from "@dtos/ExerciseDTO";
import { Loading } from "@components/Loading";

type RouteParams = {
  exerciseId: string;
}

export function Exercise() {
  const [isLoading, setIsLoading] = useState(true);
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const {exerciseId} = useRoute().params as RouteParams;
  const toast = useToast();

  function handleGoBack() {
    navigation.goBack();
  }

  async function fetchExerciseDetails() {
    try {
      setIsLoading(true);
      const response = await api.get(`/exercises/${exerciseId}`);
      setExercise(response.data);
    } catch (error) {
      toast.show({
        placement: "bottom",
        render: ({ id }) => {
          const toastId = "toast-" + id;
          return (
            <ErrorToast id={toastId} message="Erro ao buscar detalhes do exercício" />
          );
        },
      });
    }finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchExerciseDetails();
  }, [exerciseId]);

  return (
    <VStack flex={1}>
      
      <VStack bg="$gray600"  pt={50} pb={10}  px={32}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeftIcon} color="$green500" size="xl" />
        </TouchableOpacity>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading fontFamily="$heading" color="$gray100" fontSize={"$lg"} flexShrink={1} >
            {exercise.name}
          </Heading>

          <HStack alignItems="center">
            <BodySvg/>
            <Text color="$gray200" ml={1} textTransform="capitalize">{exercise.group}</Text>
          </HStack>
        </HStack>
      </VStack>

      {
        isLoading ? <Loading /> : 
        <ScrollView>
          <VStack p={32}>
            <Box rounded={"$md"} mb={16} overflow="hidden">
              <Image 
                w={"$full"}
                h={300}
                resizeMode="cover"
                alt="ext" 
                source={{uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}`}} />
            </Box>
            <Box bg="$gray600" rounded={"$md"} pb={8} px={16}>
              <HStack alignItems="center" justifyContent="space-between" mb={16} mt={32}>
                <HStack alignItems="center" mb={8}>
                  <SeriesSvg/>
                  <Text color="$gray200" ml={10} textTransform="capitalize">{exercise.series} séries</Text>
                </HStack>

                <HStack alignItems="center" mb={8}>
                  <RepetitionsSvg/>
                  <Text color="$gray200" ml={10} textTransform="capitalize">{exercise.repetitions} repeticoes</Text>
                </HStack>

              </HStack>
                <Button title="Marcar como Realizado" />
            </Box>
          
          </VStack>

        </ScrollView>
      }

      
    </VStack>
  );
}