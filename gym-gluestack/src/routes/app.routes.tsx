import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/home.svg";
import HistorySvg from "@assets/history.svg";
import ProfileSvg from "@assets/profile.svg";

import {Home} from "@screens/Home";
import {Exercise} from "@screens/Exercise";
import {Profile} from "@screens/Profile";
import {History} from "@screens/History";
import { config } from "../../config/gluestack-ui.config";
import { Platform } from "react-native";

type AppRoutesProps = {
    Home: undefined;
    Exercise: undefined;
    History: undefined;
    Profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>;

const {Navigator,Screen} = createBottomTabNavigator();

export function AppRoutes() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: config.tokens.colors.green500,
                tabBarInactiveTintColor: config.tokens.colors.gray200,
                tabBarStyle: {
                    backgroundColor: config.tokens.colors.gray600,
                    borderTopWidth: 0,
                    height: Platform.OS === 'android' ? 'auto' : 96,
                    paddingBottom: config.tokens.space[8],
                    paddingTop: config.tokens.space[8],
                }
            
            }}
        >
            <Screen name="Home" 
                    component={Home} 
                    options={{
                        tabBarIcon: ({size,color}) => (
                            <HomeSvg width={size} height={size} fill={color} />
                        )
                    }}
            />
            <Screen name="History" 
                    component={History}
                    options={{
                        tabBarIcon: ({size,color}) => (
                            <HistorySvg width={size} height={size} fill={color} />
                        )
                    }} 
            />
            <Screen name="Profile" 
                    component={Profile}
                    options={{
                        tabBarIcon: ({size,color}) => (
                            <ProfileSvg width={size} height={size} fill={color} />
                        )
                    }} 
            />
            <Screen name="Exercise" 
                    component={Exercise}
                    options={{tabBarButton: () => null}} 
            />
        </Navigator>
    );
}