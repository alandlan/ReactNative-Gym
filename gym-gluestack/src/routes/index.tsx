import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { Box,useTheme } from "@gluestack-ui/themed";

export function Routes(){
    const theme = DefaultTheme;
    theme.colors.background = "$trueGray700";

    return (
        <Box flex={1} bg="$trueGray700">
            <NavigationContainer theme={theme}>
                <AuthRoutes />
            </NavigationContainer>
        </Box>
        
    );
}