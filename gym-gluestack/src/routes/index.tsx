import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { Box } from "@gluestack-ui/themed";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "@hooks/useAuth";

export function Routes(){
    const {user } = useAuth();
    console.log(user);

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