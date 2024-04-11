import { StatusBar, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { theme } from '@theme/index';
import { Loading } from '@components/Loading';
import {Roboto_400Regular, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {fontsLoaded ? 
        <Routes />:
        <Loading />
      }
    </PaperProvider>
  );
}
