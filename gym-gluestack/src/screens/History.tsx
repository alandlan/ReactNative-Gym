import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, SectionList, VStack } from "@gluestack-ui/themed";
import { useState } from "react";


export function History() {
  const [exercices, setExercices] = useState([
    {
      title: "20.09.2021",
      data: [
        "Costas","Pernas","Peito"
      ]
    },
    {
      title: "19.09.2021",
      data: [
        "Costas","Pernas","Peito"
      ]
    },
    {
      title: "18.09.2021",
      data: [
        "Costas","Pernas","Peito"
      ]
    }
  ])

  return (
    <VStack flex={1}>
        <ScreenHeader title="Historico de Exercicios" />
        
        <SectionList 
          sections={exercices}
          keyExtractor={(item) => item as string}
          renderItem={({item}) => <HistoryCard />}
          renderSectionHeader={({section}) => (
            <Heading color="$gray200" fontSize={"$md"} mt={10} mb={3}>
              {section.title}
            </Heading>
          )}
          px={16}
          contentContainerStyle={exercices.length === 0 && {flex: 1, justifyContent: "center"}}
          ListEmptyComponent={
            <Heading color="$gray200" fontSize={"$md"} mt={10} mb={3} textAlign="center">
              Nenhum exercicio encontrado
            </Heading>
          }
        />

        {/* <HistoryCard /> */}
    </VStack>
  );
}