import { VStack } from "@components/Commom";
import { HomeHeader } from "@components/HomeHeader";
import { View } from "react-native";
import { Text } from "react-native-paper";


export function Home() {
    return (
        <VStack>
            <HomeHeader />
        </VStack>
    );
}