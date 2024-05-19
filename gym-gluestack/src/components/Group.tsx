import { VStack,Text, Pressable } from "@gluestack-ui/themed";
import { PressableProps } from "react-native";


type Props = PressableProps & {
    name: string;
    isActive: boolean;
}

export function Group({name,isActive, ...rest}: Props) {
  return (
    <Pressable
        mr={9}
        w={96}
        h={32}
        bg="$gray600"
        rounded={"$md"}
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        borderColor={isActive ? "$green500" : "$gray800"}
        borderWidth={isActive ? 1 : 0}
        $active-borderColor= "$green500"
        $active-borderWidth={1}
        {...rest}
    >
        <Text
            color={isActive ? "$green500" : "$gray200"}
            textTransform="uppercase"
            fontSize="$xs"
            fontWeight="$bold"
            
        >
            {name}
            </Text>
    </Pressable>
  );
}