import { View } from "react-native";
import { Text } from "react-native-paper";

import { theme } from "@theme/index";


export function HStack(
    props: {
        children: React.ReactNode;
        style?: any;
    }
) {
    return (
        <View style={{justifyContent:'center', alignItems:'flex-start', flexDirection: "row", ...props.style}}>
            {props.children}
        </View>
    );
}

export function VStack(
    props: {
        children: React.ReactNode;
        style?: any;
    }
) {
    return (
        <View style={{justifyContent:'center', alignItems:'flex-start', flexDirection: "column", ...props.style}}>
            {props.children}
        </View>
    );
}

export function Heading(
    props: {
        children: React.ReactNode;
        style?: any;
    }
) {
    return (
        <Text style={{color: theme.colors.gray100, fontFamily: theme.fonts.heading, fontSize: theme.fontSizes.md}}>
            {props.children}
        </Text>
    );
}