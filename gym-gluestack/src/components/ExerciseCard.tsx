import { HStack,Heading,Icon,Image, Text, VStack } from "@gluestack-ui/themed";
import { ChevronRightIcon } from "lucide-react-native";
import { TouchableOpacity,TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {

}

export function ExerciseCard({...rest}: Props){
    return (
        <TouchableOpacity 
            {...rest}
        >
            <HStack bg="$trueGray500" alignItems="center" p={8} pr={4} rounded={"$md"} mb={9}>
                <Image 
                    alt="exercise image 1"
                    source={{uri: "https://www.realsimple.com/thmb/dsrD3SKItujteW9JynEcaHDtA0g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/exercises-for-aches-and-pains-2000-3ba8f13cfd8d42c6ac9c0ec0d7fe3cea.jpg"}}
                    w={64}
                    h={64}
                    rounded={"$md"}
                    mr={8}
                    // resizeMode="center"
                />
                <VStack flex={1}>
                    <Heading fontSize={"$lg"} color="$white">
                        Remada lateral
                    </Heading>
                    <Text fontSize={"$sm"} color="$trueGray200" numberOfLines={1}>
                        3 series x 12
                    </Text>
                </VStack>

                <Icon as={ChevronRightIcon} size={"lg"} color="$trueGray200" ml={"auto"} />
            </HStack>

        </TouchableOpacity>
    )
}