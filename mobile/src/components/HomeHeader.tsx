import { HStack, Heading, Text, VStack,Icon, SafeAreaView } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";
import { LogOut } from "lucide-react-native";
import { useAuth } from "@hooks/useAuth";

import userPhotoDefault from "@assets/userPhotoDefault.png";
import { api } from "@services/api";

export function HomeHeader() {
    const { user, signOut } = useAuth();

    const avatarUrl = user.avatar ? 
        {uri: `${api.defaults.baseURL}/avatar/${user.avatar}`} : 
        userPhotoDefault;

    async function handleSignOut(){
        try {
            await signOut();
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <SafeAreaView bg="$gray600">
            <HStack bg="$gray600" pt={50} pb={10} px={32} alignItems="center">
                <UserPhoto 
                    size={48} 
                    source={avatarUrl} 
                    alt="userPhoto"
                    style={{marginRight: 8}}/>
                <VStack flex={1}>
                    <Text color="$gray100" fontSize={"$md"}>
                        Ola
                    </Text>

                    <Heading fontFamily="$heading" color="$gray100" fontSize={"$md"}>
                        {user.name}
                    </Heading>
                </VStack>
                
                <TouchableOpacity onPress={handleSignOut}>
                    <Icon as={LogOut} size={"xl"}  color={"$gray100"}/>
                </TouchableOpacity>
                
            </HStack>
        </SafeAreaView>
    );
}