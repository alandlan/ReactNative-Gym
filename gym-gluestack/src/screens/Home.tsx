import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList, HStack, Heading, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";


export function Home() {
  const [groups, setGroups] = useState(["costa","ombro","bicepis","tricepis"]);
  const [exercises, setExercises] = useState(["Remada lateral","Desenvolvimento","Rosca direta","Tríceps testa"]);
  const [groupSelected, setGroupSelected] = useState("costa");

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
        />

        <VStack flex={1} px={16}>
          <HStack justifyContent="space-between" marginBottom={10}>
            <Heading color="$trueGray200" fontSize="$md">Exercícios</Heading>

            <Text color="$trueGray200" fontSize={"$md"}>
              {exercises.length}
            </Text>
          </HStack>

          <FlatList 
            data={exercises}
            keyExtractor={(item) => item as string}
            renderItem={({item}) => (
              <ExerciseCard />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 10}}
          />

        </VStack>
        

          
    </VStack>
  );
}