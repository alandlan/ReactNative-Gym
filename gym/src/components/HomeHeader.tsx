import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons} from "@expo/vector-icons";
// import { Text } from "react-native-paper";

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
                <Heading fontFamily="$heading">Alan</Heading>
            </VStack>
            <TouchableOpacity>

            <MaterialIcons name="logout" size={24} color={theme.colors.gray200} />
            </TouchableOpacity>
        </HStack>

    );
}