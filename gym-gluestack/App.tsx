import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed"
import {Roboto_400Regular, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto';
import { Loading } from "./src/components/Loading";
import { Routes } from "@routes/index";
import {config} from "./config/gluestack-ui.config"
import { AuthContext } from "@contexts/AuthContext";

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
      <AuthContext.Provider value={{
        user: {
          id: "1",
          email: "alan@alan",
          name: "Alan",
          avatar: "alan"
        }
      }}>
        {fontsLoaded ? 
          <Routes /> :
          <Loading />
        }
      </AuthContext.Provider>
    </GluestackUIProvider>
  )
}