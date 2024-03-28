import { StatusBar, Text } from 'react-native';
import {GluestackUIProvider,Box} from '@gluestack-ui/themed';

import { useFonts,Roboto_400Regular,Roboto_700Bold} from '@expo-google-fonts/roboto';

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular,Roboto_700Bold});

  return (
    <GluestackUIProvider>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text style={{fontFamily:'Roboto_700Bold'}}>Open up App.js to start working on your app!</Text>
        </Box>
      ) : (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text style={{fontFamily:'Roboto_700Bold'}}>Loading...</Text>
        </Box>
      )}
    </GluestackUIProvider>
  );
}

