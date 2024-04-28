import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { theme } from '@theme/index';
import { View } from "react-native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes(){

    const themeNative = DefaultTheme;
    themeNative.colors.background = theme.colors.gray700;

    return (
        <View style={{flex:1,backgroundColor: theme.colors.gray700}}>
            <NavigationContainer theme={themeNative} >
                <AppRoutes />
            </NavigationContainer>
        </View>
        
    );
}