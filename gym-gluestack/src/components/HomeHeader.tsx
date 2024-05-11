import { HStack, Heading, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";


export function HomeHeader() {
  return (
    <HStack bg="$trueGray600" pt={56} pb={8} px={32} alignItems="center">
        <UserPhoto 
            size={48} 
            source={{uri: "https://avatars.githubusercontent.com/u/20859616?s=400&v=4"}} 
            alt="userPhoto"
            style={{marginRight: 8}}/>
        <VStack>
        <Text color="$trueGray100" fontSize={"$md"}>
            Ola
        </Text>

        <Heading color="$trueGray100" fontSize={"$md"}>
            Alan Martins
        </Heading>
        </VStack>
    </HStack>
  );
}