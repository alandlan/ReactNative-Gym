import { Center,Heading,Text } from "@gluestack-ui/themed";
import { Dimensions } from "react-native";

type Props = {
    title: string;
};

export function ScreenHeader({title}: Props) {

  //get 20% of the screen height
  const h = Dimensions.get("window").height * 0.2;

  return (
    <Center h={h} bg="$gray600" pt={64} pb={21}>
        <Heading fontFamily="$heading" color="$gray100" fontSize={"$xl"} >
            {title}
        </Heading>
    </Center>
  );
}