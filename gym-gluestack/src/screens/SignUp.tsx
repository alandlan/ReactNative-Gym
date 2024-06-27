import { 
  VStack,
  ImageBackground, 
  Text, 
  Center, 
  Heading, 
  View, 
  MailIcon, 
  EyeOffIcon, 
  ScrollView,
  EditIcon,
  useToast,
  set} from "@gluestack-ui/themed";

import LogoSvg from "@assets/logo.svg";
import BackgroundImage from "@assets/background.png";
import { Input } from "@components/Input";
import { Dimensions,Image } from "react-native";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { ErrorToast } from "@components/ErrorToast";
import { useState } from "react";
import { useAuth } from "@hooks/useAuth";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório.'),
  email: yup.string().required('E-mail é obrigatório.').email('E-mail inválido.'),
  password: yup.string().required('Senha é obrigatória.').min(6, 'Mínimo de 6 caracteres.'),
  password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password')], 'As senhas devem ser iguais.'),
});

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const { width,height } = Dimensions.get('window');
  const imageHeight = Image.resolveAssetSource(BackgroundImage).height;
  const toast = useToast();
  const {signIn} = useAuth();
  

  const {control,handleSubmit,formState: {errors}} = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handlGoBack(){
    navigation.goBack();
  }

  async function handleSignUp({name,email,password}: FormDataProps){
    try {
      setIsLoading(true);
      await api.post('/users',{
        name,
        email,
        password
      });
      await signIn(email,password);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const description = isAppError ? error.message : "Erro no servidor. Tente novamente mais tarde!";
      toast.show({
        placement: "bottom",
        render: ({ id }) => {
          const toastId = "toast-" + id
          return (
            <ErrorToast 
              id={toastId} 
              message={description} 
            />
          )
        },
      });
    }finally{
      setIsLoading(false);
    }

    
  }

  return (

    <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} pb={40}>
          <ImageBackground 
                source={BackgroundImage} 
                defaultSource={BackgroundImage}
                alt="Background"
                resizeMode="contain"
                position="absolute"
                w={width}
                h={imageHeight}
                top={imageHeight - height}
              />
          
            <View px={40}>
              <Center my={96}>
                <LogoSvg />

                <Text color="$gray100" fontSize={"$sm"}>
                    Treine sua mente e o seu corpo
                </Text>
              </Center>

              <Center mb={24}>
                <Heading fontFamily="$heading" color="$gray100" fontSize={"$xl"} >
                  Crie sua conta
                </Heading>
              </Center>

              <Center>
                <Controller 
                  control={control}
                  name="name"
                  render={({field: {onChange, value}}) => (
                    <Input  onChangeText={onChange} 
                            value={value} placeholder="Nome" 
                            icon={EditIcon}
                            errorMessage={errors.name?.message && errors.name.message}/>
                  )}
                />

                <Controller 
                  control={control}
                  name="email"
                  render={({field: {onChange, value}}) => (
                    <Input  onChangeText={onChange} 
                            value={value} 
                            placeholder="E-mail" 
                            keyboardType="email-address" 
                            autoCapitalize="none" 
                            icon={MailIcon} 
                            errorMessage={errors.email?.message && errors.email.message} />
                  )}
                />

                <Controller 
                  control={control}
                  name="password"
                  render={({field: {onChange, value}}) => (
                    <Input  onChangeText={onChange} 
                            value={value} 
                            placeholder="Senha" 
                            secureTextEntry 
                            icon={EyeOffIcon}
                            errorMessage={errors.password?.message && errors.password.message}/>
                  )}
                />

                <Controller 
                  control={control}
                  name="password_confirm"
                  render={({field: {onChange, value}}) => (
                    <Input 
                      onChangeText={onChange} 
                      value={value} 
                      placeholder="Confirme a Senha" 
                      secureTextEntry 
                      icon={EyeOffIcon} 
                      onSubmitEditing={handleSubmit(handleSignUp)} 
                      returnKeyType="send"
                      errorMessage={errors.password_confirm?.message && errors.password_confirm.message}/>
                  )}
                />

                <Button onPress={handleSubmit(handleSignUp)} title="Criar e Acessar" variant="primary" isLoading={isLoading} />
              </Center >

              <Center mt={16}>
                <Button  title="Voltar para o Login" variant="secondary" onPress={handlGoBack}/>
              </Center>

            </View>
      </VStack>
    </ScrollView>
    
  );
}
