import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, VStack, Text, Heading, View,useToast, set } from "@gluestack-ui/themed";
import { useState } from "react";
import ContentLoader,{Circle} from "react-content-loader/native";
import { TouchableOpacity, useWindowDimensions } from "react-native";

import * as yup from "yup";

import * as ImagePicker from 'expo-image-picker';
import { ToastCustom } from "@components/ToastCustom";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "@hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";

type ProfileFormData = {
  name: string;
  email: string;
  old_password: string;
  password: string;
  confirmNewPassword: string;
}

const profileSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  old_password: yup.string().nullable().min(6, "Senha deve ter no mínimo 6 caracteres").transform((value) => !!value ? value : null),
  password: yup.string().nullable().min(6, "Senha deve ter no mínimo 6 caracteres").transform((value) => !!value ? value : null),
  confirmNewPassword: yup.string().nullable().transform((value) => !!value ? value : null)
  .oneOf([yup.ref("password"), null], "Senhas não conferem")
  .when("password", {
    is: (Field: string) => Field, 
    then: (schema) =>
			schema.nullable()
        .required('Informe a confirmação da senha.')
        .transform((value) => !!value ? value : null),
  })
});

export function Profile() {
  const { width } = useWindowDimensions();
  const centerScreen = (width / 2) - 24;

  const [isLoading, setIsLoading] = useState(false);
  const[photoIsLoading, setPhotoIsLoading] = useState(true);
  const[photoUri, setPhotoUri] = useState("https://avatars.githubusercontent.com/u/20859616?s=400&v=4");

  const toast = useToast();
  const {user,updateUserProfile} = useAuth();
  const { control,handleSubmit,formState: {errors} } = useForm<ProfileFormData>({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
    resolver: yupResolver(profileSchema)
  });

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

      const photo = photoSelected.assets[0];

      //get image size convert if null to int
      const imageSize = photo.fileSize || 0;

      // if size more then 3mb block
      if(!imageSize || (imageSize / 1024 / 1024) > 3){
        return toast.show({
          placement: "bottom",
          render: ({ id }) => {
            const toastId = "toast-" + id
            return (
              <ToastCustom
                id={toastId}
                type="error"
                message="Imagem muito grande, selecione uma imagem menor que 3mb" />
            )
          },
        });
      }

      const fileExtension = photo.uri.split(".").pop();

      const photoFile = {
        name: `${user.name}.${fileExtension}`.toLowerCase(),
        uri: photo.uri,
        type: `${photo.type}/${fileExtension}`,
      }

      console.log(photo);


    }catch(error){
      console.log(error);
    }
  }

  async function handleProfileUpdate(data: ProfileFormData){
    try {
      setIsLoading(true);

      console.log(data);

      await api.put("/users", data);
      
      const userUpdated = user;
      userUpdated.name = data.name;

      await updateUserProfile(userUpdated);

      toast.show({
        placement: "bottom",
        render: ({ id }) => {
          const toastId = "toast-" + id
          return (
            <ToastCustom 
              id={toastId} 
              message="Perfil atualizado com sucesso!" 
              type="success"
            />
          )
        },
      });
    } catch (error) {

      const isAppError = error instanceof AppError;
      const description = isAppError ? error.message : "Erro no servidor. Tente novamente mais tarde!";
      toast.show({
        placement: "bottom",
        render: ({ id }) => {
          const toastId = "toast-" + id
          return (
            <ToastCustom 
              id={toastId} 
              message={description} 
              type="error"
            />
          )
        },
      });
      
    }finally{
      setIsLoading(false);
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

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              bg="$gray600"
              placeholder="Nome"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
            />
          )}
          name="name"
        />

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              bg="$gray600"
              placeholder="E-mail"
              isDisabled={true}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
          name="email"
        />

        </Center>

        <VStack px={24} mt={12} mb={9}>
          <Heading fontFamily="$heading" fontSize="$md" color="$gray200" mb={4}>
            Alterar senha
          </Heading>

          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Input
                bg="$gray600"
                placeholder="Senha Antiga"
                isPassword={true}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.old_password?.message}
              />
            )}
            name="old_password"
          />

          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Input
                bg="$gray600"
                placeholder="Nova senha"
                isPassword={true}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
            name="password"
          />

          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Input
                bg="$gray600"
                placeholder="Confirmar nova senha"
                isPassword={true}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.confirmNewPassword?.message}
              />
            )}
            name="confirmNewPassword"
          />

         <View mt={16}>

          <Button title="Atualizar" onPress={handleSubmit(handleProfileUpdate)} isLoading={isLoading} />
         </View>
        </VStack>
      </ScrollView>
    </VStack>
  );
}