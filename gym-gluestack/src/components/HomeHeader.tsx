import { HStack, Heading, Text, VStack } from "@gluestack-ui/themed";


export function HomeHeader() {
  return (
    <HStack bg="$trueGray600" pt={56} pb={8} px={32} alignItems="center">
        <VStack>
        <Text color="$trueGray100" fontSize={"$md"}>
            Ola
        </Text>

        <Heading color="$trueGray100" fontSize={"$md"}>
            Home
        </Heading>
        </VStack>
    </HStack>
  );
}