import { ArrowLeftIcon, Center,HStack,Heading,Icon,Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Dimensions, TouchableOpacity } from "react-native";

import BodySvg from "@assets/body.svg";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  //get 20% of the screen height
  const h = Dimensions.get("window").height * 0.2;

  return (
    <VStack flex={1}>
      <VStack bg="$gray600" h={h} px={32} pt={64} pb={21}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeftIcon} color="$green500" size="xl" />
        </TouchableOpacity>
        <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
          <Heading color="$gray100" fontSize={"$lg"} flexShrink={1} >
            Remada lateral
          </Heading>

          <HStack alignItems="center">
            <BodySvg/>
            <Text color="$gray200" ml={1} textTransform="capitalize">Costa</Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}