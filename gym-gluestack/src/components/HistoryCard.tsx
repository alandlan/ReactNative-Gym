import { HistoryDTO } from "@dtos/HistoryDTO";
import { HStack, Heading, Text, VStack } from "@gluestack-ui/themed";

type Props = {
    data: HistoryDTO;
}

export function HistoryCard({data}: Props){
    return(
        <HStack w={"$full"} px={16} py={8} mb={9} bg="$gray600" rounded={"$md"} alignItems="center" justifyContent="space-between">
            <VStack mr={5}>
                <Heading fontFamily="$heading" color="$white" fontSize={"$lg"} textTransform="capitalize" flexShrink={1} numberOfLines={1}>
                    {data.group}
                </Heading>

                <Text color="$gray100" fontSize={"$md"} numberOfLines={1}>
                    {data.name}
                </Text>
            </VStack>

            <Text color="$gray300" fontSize={"$md"}>
                {data.hour}
            </Text>
        </HStack>
    )
}