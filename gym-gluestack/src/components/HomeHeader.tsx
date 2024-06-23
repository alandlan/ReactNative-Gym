import { HStack, Heading, Text, VStack,Icon, SafeAreaView } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";
import { Dimensions, TouchableOpacity } from "react-native";
import { LogOut } from "lucide-react-native";


export function HomeHeader() {

  const h = Dimensions.get("window").height * 0.2;

  return (
    <SafeAreaView bg="$gray600">
        <HStack bg="$gray600" pt={40} pb={20} px={32} alignItems="center">
            <UserPhoto 
                size={48} 
                source={{uri: "https://avatars.githubusercontent.com/u/20859616?s=400&v=4"}} 
                alt="userPhoto"
                style={{marginRight: 8}}/>
            <VStack flex={1}>
                <Text color="$gray100" fontSize={"$md"}>
                    Ola
                </Text>

                <Heading fontFamily="$heading" color="$gray100" fontSize={"$md"} fontFamily="$heading">
                    Alan Martins
                </Heading>
            </VStack>
            
            <TouchableOpacity>
                <Icon as={LogOut} size={"xl"}  color={"$gray100"}/>
            </TouchableOpacity>
            
        </HStack>
    </SafeAreaView>
  );
}