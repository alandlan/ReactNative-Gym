import { 
  VStack,
  ImageBackground, 
  Text, 
  Center, 
  Heading, 
  View, 
  MailIcon, 
  EyeOffIcon, 
  ScrollView} from "@gluestack-ui/themed";

import LogoSvg from "@assets/logo.svg";
import BackgroundImage from "@assets/background.png";
import { Input } from "@components/Input";
import { Dimensions,Image } from "react-native";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
}

export function SignIn() {
  const { width,height } = Dimensions.get('window');
  const imageHeight = Image.resolveAssetSource(BackgroundImage).height;

  const { control, handleSubmit,formState: {errors} } = useForm<FormData>();

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNavigateToSignUp(){
    navigation.navigate("SignUp");
  }

  function handleSignIn({email,password}: FormData){
    console.log(email,password);
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
                  Acesse sua conta
                </Heading>
              </Center>

              <Center>
                <Controller 
                  control={control}
                  render={({field:{onChange,value}}) => (
                    <Input 
                      placeholder="E-mail" 
                      keyboardType="email-address" 
                      autoCapitalize="none" 
                      icon={MailIcon}
                      onChangeText={onChange}
                      value={value}
                      errorMessage={errors.email?.message}
                    />
                  )}
                  name="email"
                  rules={{required: 'E-mail é obrigatório'}}
                />

                <Controller 
                  control={control}
                  render={({field:{onChange,value}}) => (
                    <Input 
                      placeholder="Senha" 
                      secureTextEntry 
                      icon={EyeOffIcon}
                      onChangeText={onChange}
                      value={value}
                      errorMessage={errors.password?.message}
                    />
                  )}
                  name="password"
                  rules={{required: 'Senha é obrigatória'}}
                />
                <Button title="Acessar" variant="primary" onPress={handleSubmit(handleSignIn)} />
              </Center>
              
              <Center mt={80}>
                <Text color="$gray100" fontSize={"$sm"} fontFamily={"$body"}>
                  Não tem uma conta?
                </Text>

                <Button title="Criar Conta" variant="secondary" onPress={handleNavigateToSignUp} />
              </Center>

            </View>
      </VStack>
    </ScrollView>
    
  );
}