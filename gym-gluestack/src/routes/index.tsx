import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { Box } from "@gluestack-ui/themed";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useContext } from "react";
import { AuthContext } from "@contexts/AuthContext";

export function Routes(){
    const contextData = useContext(AuthContext);

    const theme = DefaultTheme;
    theme.colors.background = "$gray700";

    return (
        <Box flex={1} bg="$gray700">
            <NavigationContainer theme={theme}>
                <AuthRoutes />
            </NavigationContainer>
        </Box>
        
    );
}