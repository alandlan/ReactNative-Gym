import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { Box } from "@gluestack-ui/themed";
import { AppRoutes } from "./app.routes";

export function Routes(){
    const theme = DefaultTheme;
    theme.colors.background = "$trueGray700";

    return (
        <Box flex={1} bg="$trueGray700">
            <NavigationContainer theme={theme}>
                <AppRoutes />
            </NavigationContainer>
        </Box>
        
    );
}