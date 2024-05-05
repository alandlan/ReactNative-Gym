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

export function SignIn() {
  const { width,height } = Dimensions.get('window');
  const imageHeight = Image.resolveAssetSource(BackgroundImage).height;

  return (

    <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <VStack bg="$trueGray800" flex={1} pb={40}>
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

                <Text color="$trueGray100" fontSize={"$sm"}>
                    Treine sua mente e o seu corpo
                </Text>
              </Center>

              <Center mb={24}>
                <Heading color="$trueGray100" fontSize={"$xl"} >
                  Acesse sua conta
                </Heading>
              </Center>

              <Center>
                <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" icon={MailIcon}/>
                
                <Input placeholder="Senha" secureTextEntry icon={EyeOffIcon}/>

                <Button title="Acessar" variant="primary" />
              </Center>
              
              <Center mt={24}>
                <Text color="$trueGray100" fontSize={"$sm"} fontFamily={"$body"}>
                  Não tem uma conta?
                </Text>

                <Button title="Criar Conta" variant="secondary" />
              </Center>

            </View>
      </VStack>
    </ScrollView>
    
  );
}