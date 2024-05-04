import { VStack } from "@components/Commom";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { View } from "react-native";
import { Text } from "react-native-paper";


export function Home() {
    return (
        <VStack>
            <HomeHeader />

            <Group name="Grupo 1"/>
        </VStack>
    );
}