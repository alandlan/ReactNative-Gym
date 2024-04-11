import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignIn } from "@screens/Signin";
import { SignUp } from "@screens/Signup";

type AuthRoutesProps = {
    signIn: undefined;
    signUp: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="signIn" component={SignIn} />
            <Screen name="signUp" component={SignUp} />
        </Navigator>
    );
}