import { View, ViewStyle } from "react-native";
import { Text } from "react-native-paper";

import { theme } from "@theme/index";
import React from "react";

interface CommonProps {
    children: React.ReactNode;
    style?: ViewStyle;
}

const HStack: React.FC<CommonProps> = ({children,style}) => {
    return (
        <View style={{justifyContent:'center', alignItems:'flex-start', width: "100%", flexDirection: "row", ...style}}>
            {children}
        </View>
    );
}

const VStack: React.FC<CommonProps> = ({children,style}) => {
    return (
        <View style={{justifyContent:'center', alignItems:'flex-start',width: "100%", flexDirection: "column", ...style}}>
            {children}
        </View>
    );
}

const Heading: React.FC<CommonProps> = ({children,style}) => {
    return (
        <Text style={{color: theme.colors.gray100, fontFamily: theme.fonts.heading, fontSize: theme.fontSizes.md, ...style}}>
            {children}
        </Text>
    );
}

export { HStack, VStack, Heading };