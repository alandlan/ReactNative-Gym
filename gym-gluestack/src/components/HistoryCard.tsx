import { HStack, Heading, Text, VStack } from "@gluestack-ui/themed";


export function HistoryCard(){
    return(
        <HStack w={"$full"} px={16} py={8} mb={9} bg="$gray600" rounded={"$md"} alignItems="center" justifyContent="space-between">
            <VStack mr={5}>
                <Heading fontFamily="$heading" color="$white" fontSize={"$lg"} textTransform="capitalize" flexShrink={1} numberOfLines={1}>Costas</Heading>

                <Text color="$gray100" fontSize={"$md"} numberOfLines={1}>3 series de 10 repetições</Text>
            </VStack>

            <Text color="$gray300" fontSize={"$md"}>
                08:48
            </Text>
        </HStack>
    )
}