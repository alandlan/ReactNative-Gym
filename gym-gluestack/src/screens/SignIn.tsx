import { VStack,ImageBackground, Text, Center } from "@gluestack-ui/themed";

import LogoSvg from "@assets/logo.svg";
import BackgroundImage from "@assets/background.png";

export function SignIn() {
  return (
    <VStack flex={1} bg="$trueGray700" position="relative">
        <ImageBackground 
            source={BackgroundImage} 
            defaultSource={BackgroundImage}
            alt="Background"
            resizeMode="cover"
            position="absolute"
            w={"100%"}    
            h={"100%"}
        />

        <Center my={96}>
          <LogoSvg />

          <Text>
              Treine sua mente e o seu corpo
          </Text>
        </Center>

        
        
    </VStack>
    
  );
}