import { ExerciseDTO } from "@dtos/ExerciseDTO";
import { HStack,Heading,Icon,Image, Text, VStack } from "@gluestack-ui/themed";
import { api } from "@services/api";
import { ChevronRightIcon } from "lucide-react-native";
import { TouchableOpacity,TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    data: ExerciseDTO;
}

export function ExerciseCard({data,...rest}: Props){
    return (
        <TouchableOpacity 
            {...rest}
        >
            <HStack bg="$gray500" alignItems="center" p={8} pr={4} rounded={"$md"} mb={9}>
                <Image 
                    alt="exercise image 1"
                    source={{uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}`}}
                    w={64}
                    h={64}
                    rounded={"$md"}
                    mr={8}
                    resizeMode="cover"
                />
                <VStack flex={1}>
                    <Heading fontSize={"$lg"} color="$white" fontFamily="$heading">
                        {data.name}
                    </Heading>
                    <Text fontSize={"$sm"} color="$gray200" numberOfLines={1}>
                        {data.series} series x {data.repetitions} repetições
                    </Text>
                </VStack>

                <Icon as={ChevronRightIcon} size={"lg"} color="$gray200" ml={"auto"} />
            </HStack>

        </TouchableOpacity>
    )
}