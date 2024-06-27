import { HStack, Heading, Text, VStack,Icon, SafeAreaView } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";
import { LogOut } from "lucide-react-native";
import { useAuth } from "@hooks/useAuth";

import userPhotoDefault from "@assets/userPhotoDefault.png";

export function HomeHeader() {
    const { user } = useAuth();

  return (
    <SafeAreaView bg="$gray600">
        <HStack bg="$gray600" pt={40} pb={20} px={32} alignItems="center">
            <UserPhoto 
                size={48} 
                source={user.avatar ? {uri: user.avatar} : userPhotoDefault} 
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
            
            <TouchableOpacity>
                <Icon as={LogOut} size={"xl"}  color={"$gray100"}/>
            </TouchableOpacity>
            
        </HStack>
    </SafeAreaView>
  );
}