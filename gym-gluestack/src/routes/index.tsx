import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { Box } from "@gluestack-ui/themed";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "@hooks/useAuth";
import { AppRoutes } from "./app.routes";
import { Loading } from "@components/Loading";

export function Routes(){
    const {user,isLoading } = useAuth();
    console.log(user);

    const theme = DefaultTheme;
    theme.colors.background = "$gray700";

    if(isLoading){
        return <Loading />
    }

    return (
        <Box flex={1} bg="$gray700">
            <NavigationContainer theme={theme}>
                {user && user.id ? <AppRoutes /> : <AuthRoutes />}
            </NavigationContainer>
        </Box>
        
    );
}