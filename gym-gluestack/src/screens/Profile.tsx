import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, VStack, Text, Heading, View,useToast, Toast, ToastTitle, ToastDescription } from "@gluestack-ui/themed";
import { useState } from "react";
import ContentLoader,{Circle} from "react-content-loader/native";
import { TouchableOpacity, useWindowDimensions } from "react-native";

import * as ImagePicker from 'expo-image-picker';

export function Profile() {
  const { width } = useWindowDimensions();
  const centerScreen = (width / 2) - 24;

  const[photoIsLoading, setPhotoIsLoading] = useState(true);
  const[photoUri, setPhotoUri] = useState("https://avatars.githubusercontent.com/u/20859616?s=400&v=4");

  const toast = useToast();

  async function handleUserPhotoSelect(){
    try{
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4,4],
        quality: 1,
      });
  
      if(photoSelected.canceled){
        return;
      }

      //get image size convert if null to int
      const imageSize = photoSelected.assets[0].fileSize || 0;

      // if size more then 3mb block
      if(imageSize || (imageSize / 1024 / 1024) > 3){
        return toast.show({
          placement: "bottom",
          render: ({ id }) => {
            const toastId = "toast-" + id
            return (
              <Toast nativeID={toastId} action="error" variant="solid">
                <VStack w={"$full"} h={100}>
                  <ToastTitle>Erro</ToastTitle>
                  <ToastDescription>
                    Imagem muito grande, selecione uma imagem menor que 3mb
                  </ToastDescription>
                </VStack>
              </Toast>
            )
          },
        });
      }
  
      setPhotoUri(photoSelected.assets[0].uri);
    }catch(error){
      console.log(error);
    }
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
            source={{uri: photoUri}}
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
          <Heading fontFamily="$heading" fontSize="$md" color="$gray200" mb={4}>
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