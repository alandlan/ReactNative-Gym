import { StatusBar, Text } from 'react-native';
import {GluestackUIProvider,Box, Center} from '@gluestack-ui/themed';

import { useFonts,Roboto_400Regular,Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from '@assets/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular,Roboto_700Bold});

  return (
    <GluestackUIProvider>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? (
        <Center flex={1} justifyContent="center" alignItems="center">
          <Text style={{fontFamily:"Roboto_700Bold"}}>Open up App.js to start working on your app!</Text>
        </Center>
      ) : (
        <Center flex={1} justifyContent="center" alignItems="center">
          <Loading />
        </Center>
      )}
    </GluestackUIProvider>
  );
}

