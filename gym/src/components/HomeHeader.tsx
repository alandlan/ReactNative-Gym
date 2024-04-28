import { View } from "react-native";
import { Text } from "react-native-paper";

import { theme } from "@theme/index";
import { VStack,Heading, HStack } from "./Commom";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
    return (
        <HStack style={{
            backgroundColor: theme.colors.gray600, 
            paddingTop: 50,
            paddingBottom: 15,
            paddingHorizontal: 64,
            alignItems: "center"
        }}>
            <View style={{marginRight: 16}}>
                <UserPhoto size={64}/>
            </View>
            
            <VStack>
                <Text style={{color: theme.colors.gray100, fontSize: theme.fontSizes.md}}>Ola</Text>
                <Heading >Alan</Heading>
            </VStack>
        </HStack>
    );
}