import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

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
            />
        </Navigator>
    );
}