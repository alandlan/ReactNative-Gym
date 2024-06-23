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
  EditIcon} from "@gluestack-ui/themed";

import LogoSvg from "@assets/logo.svg";
import BackgroundImage from "@assets/background.png";
import { Input } from "@components/Input";
import { Dimensions,Image } from "react-native";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

export function SignUp() {
  const { width,height } = Dimensions.get('window');
  const imageHeight = Image.resolveAssetSource(BackgroundImage).height;

  const {control,handleSubmit,formState: {errors}} = useForm<FormDataProps>();


  const navigation = useNavigation();

  function handlGoBack(){
    navigation.goBack();
  }

  function handleSignUp(data: FormDataProps){
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
                <Heading color="$gray100" fontSize={"$xl"} >
                  Crie sua conta
                </Heading>
              </Center>

              <Center>
                <Controller 
                  control={control}
                  name="name"
                  rules={{required: "Nome é obrigatório"}}
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
                  rules={{required: "E-mail é obrigatório", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, message: "E-mail inválido"}}}
                  render={({field: {onChange, value}}) => (
                    <Input  onChangeText={onChange} 
                            value={value} placeholder="E-mail" 
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
                    <Input onChangeText={onChange} value={value} placeholder="Senha" secureTextEntry icon={EyeOffIcon}/>
                  )}
                />

                <Controller 
                  control={control}
                  name="password_confirm"
                  render={({field: {onChange, value}}) => (
                    <Input onChangeText={onChange} value={value} placeholder="Confirme a Senha" secureTextEntry icon={EyeOffIcon} onSubmitEditing={handleSubmit(handleSignUp)} returnKeyType="send"/>
                  )}
                />

                <Button onPress={handleSubmit(handleSignUp)} title="Criar e Acessar" variant="primary" />
              </Center >

              <Center mt={16}>
                <Button  title="Voltar para o Login" variant="secondary" onPress={handlGoBack}/>
              </Center>

            </View>
      </VStack>
    </ScrollView>
    
  );
}