import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { theme } from '@theme/index';
import { View } from "react-native";


export function Routes(){

    const themeNative = DefaultTheme;
    themeNative.colors.background = theme.colors.gray700;

    return (
        <View style={{flex:1,backgroundColor: theme.colors.gray700}}>
            <NavigationContainer theme={themeNative} >
                <AuthRoutes />
            </NavigationContainer>
        </View>
        
    );
}