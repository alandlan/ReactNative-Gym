import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, VStack, Text, Heading, View } from "@gluestack-ui/themed";
import { useState } from "react";
import ContentLoader,{Circle} from "react-content-loader/native";
import { TouchableOpacity, useWindowDimensions } from "react-native";

import * as ImagePicker from 'expo-image-picker';

export function Profile() {
  const { width } = useWindowDimensions();
  const centerScreen = (width / 2) - 24;

  const[photoIsLoading, setPhotoIsLoading] = useState(true);

  async function handleUserPhotoSelect(){
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,4],
      quality: 1
    });
  }

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

        <TouchableOpacity onPress={handleUserPhotoSelect}>
          <Text color="$green500" fontWeight={"$bold"} fontSize={"$md"} mt={2} mb={8}>
            Alternar foto
          </Text>
        </TouchableOpacity>

        <Input bg="$gray600" placeholder="Nome"  />
        <Input bg="$gray600" placeholder="E-mail" isDisabled={true} />

        </Center>

        <VStack px={24} mt={12} mb={9}>
          <Heading fontSize="$md" color="$gray200" mb={4}>
            Alterar senha
          </Heading>

          <Input bg="$gray600" placeholder="Senha Antiga" isPassword={true} />
          <Input bg="$gray600" placeholder="Nova senha" isPassword={true}/>
          <Input bg="$gray600" placeholder="Confirmar nova senha" isPassword={true} />
        
         <View mt={16}>

          <Button title="Atualizar" onPress={() => {}} />
         </View>
        </VStack>
      </ScrollView>
    </VStack>
  );
}