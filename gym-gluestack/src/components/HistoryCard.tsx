import { HStack, Heading, Text, VStack } from "@gluestack-ui/themed";


export function HistoryCard(){
    return(
        <HStack w={"$full"} px={16} py={8} mb={9} bg="$trueGray600" rounded={"$md"} alignItems="center" justifyContent="space-between">
            <VStack mr={5}>
                <Heading color="$white" fontSize={"$lg"} textTransform="capitalize">Costas</Heading>

                <Text color="$trueGray100" fontSize={"$md"} numberOfLines={1}>3 series de 10 repetições</Text>
            </VStack>

            <Text color="$trueGray300" fontSize={"$md"}>
                08:48
            </Text>
        </HStack>
    )
}