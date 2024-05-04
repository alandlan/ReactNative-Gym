import { GluestackUIProvider, Text, Box, StatusBar } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme
import { SignIn } from "./src/screens/SignIn"
import {Roboto_400Regular, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto';
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar 
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? 
        <SignIn /> :
        <Loading />
      }
    </GluestackUIProvider>
  )
}