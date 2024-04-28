import { Platform } from "react-native";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {theme} from '@theme/index';

import HomeSvg from "@assets/home.svg";
import HistorySvg from "@assets/history.svg";
import ProfileSvg from "@assets/profile.svg";

import {Home} from "@screens/Home";
import {Exercise} from "@screens/Exercise";
import {Profile} from "@screens/Profile";
import {History} from "@screens/History";

type AppRoutesProps = {
    home: undefined;
    exercise: undefined;
    profile: undefined;
    history: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>;

const {Navigator,Screen} = createBottomTabNavigator<AppRoutesProps>();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: theme.colors.green500,
            tabBarInactiveTintColor: theme.colors.gray200,
            tabBarStyle: {
                backgroundColor: theme.colors.gray600,
                borderTopWidth: 0,
                height: Platform.OS === 'ios' ? 80 : 60,
                // height: 64,
            }
        }}>
            <Screen 
                name="home" 
                component={Home}
                options={{
                    tabBarIcon: ({size,color}) => (
                        <HomeSvg width={size} height={size} fill={color} />
                    )
                }}
            />
            <Screen 
                name="history" 
                component={History} 
                options={{
                    tabBarIcon: ({size,color}) => (
                        <HistorySvg width={size} height={size} fill={color} />
                    )
                }}
            />
            <Screen 
                name="profile" 
                component={Profile} 
                options={{
                    tabBarIcon: ({size,color}) => (
                        <ProfileSvg width={size} height={size} fill={color} />
                    )
                }}
            />
            <Screen 
                name="exercise" 
                component={Exercise} 
                options={{tabBarButton: () => null}}
            />
        </Navigator>
    );
}