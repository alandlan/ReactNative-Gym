import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList, HStack, ScrollView, VStack } from "@gluestack-ui/themed";
import { useState } from "react";


export function Home() {
  const [groups, setGroups] = useState(["costa","ombro","bicepis","tricepis"]);
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

          
    </VStack>
  );
}