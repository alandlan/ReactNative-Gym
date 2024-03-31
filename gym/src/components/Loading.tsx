import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { theme } from '@theme/index';

export function Loading() {
    return (
        <View style={{flex: 1,justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator animating={true} color={theme.colors.red500} />
        </View>
    );
}