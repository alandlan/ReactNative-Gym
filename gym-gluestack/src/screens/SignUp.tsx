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

export function SignUp() {
  const { width,height } = Dimensions.get('window');
  const imageHeight = Image.resolveAssetSource(BackgroundImage).height;

  const navigation = useNavigation();

  function handlGoBack(){
    navigation.goBack();
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
              <Input placeholder="Nome" icon={EditIcon}/>

                <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" icon={MailIcon}/>
                
                <Input placeholder="Senha" secureTextEntry icon={EyeOffIcon}/>

                <Button title="Criar e Acessar" variant="primary" />
              </Center >

              <Center mt={80}>
                <Button  title="Voltar para o Login" variant="secondary" onPress={handlGoBack}/>
              </Center>

            </View>
      </VStack>
    </ScrollView>
    
  );
}