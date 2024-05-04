import { theme } from "@theme/index";
import {Text} from "react-native";
import { TouchableRipple } from "react-native-paper";

type GroupProps = {
    name: string;
}

export function Group({name}: GroupProps) {    
  return (
    <TouchableRipple
        onPress={() => console.log('Pressed')}
    >
        <Text
            style={{
                color: theme.colors.gray200,
                textTransform: "uppercase",
                fontSize: theme.fontSizes.xs,
                fontWeight: "bold",
            }}
        >{name}</Text>
    </TouchableRipple>
    
  );
}