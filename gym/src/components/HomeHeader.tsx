import { View } from "react-native";
import { Text } from "react-native-paper";

import { theme } from "@theme/index";
import { VStack,Heading, HStack } from "./Commom";

export function HomeHeader() {
    return (
        <HStack>
            <Text style={{color: theme.colors.gray100}}>Home</Text>
            <Heading >Header</Heading>
        </HStack>
    );
}