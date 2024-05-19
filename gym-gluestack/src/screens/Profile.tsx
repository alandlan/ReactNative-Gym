import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import ContentLoader,{Circle} from "react-content-loader/native";
import { useWindowDimensions } from "react-native";



export function Profile() {
  const { width } = useWindowDimensions();
  const centerScreen = (width / 2) - 24;

  const[photoIsLoading, setPhotoIsLoading] = useState(true);

  return (
    <VStack flex={1}>

      <ScreenHeader title="Perfil" />

      <ScrollView>
      
        <Center mt={16} px={24}>
         
         {!photoIsLoading ? (

            <ContentLoader 
              backgroundColor="#323238" 
              foregroundColor="#7C7C8A"
            >
              <Circle cx={centerScreen} cy="96" r="48" />
            </ContentLoader>

         ): (
        
          <UserPhoto
            source={{uri: "https://avatars.githubusercontent.com/u/20859616?s=400&v=4"}}
            alt="User photo"
            size={96}
          />
         )}
        </Center>
      </ScrollView>
    </VStack>
  );
}