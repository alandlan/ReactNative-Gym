import { ArrowLeftIcon, Box, Center,HStack,Heading,Icon,Image,ScrollView,Text, VStack, View } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Dimensions, TouchableOpacity } from "react-native";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";

type RouteParams = {
  exerciseId: string;
}

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const {exerciseId} = useRoute().params as RouteParams;

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
          <Heading fontFamily="$heading" color="$gray100" fontSize={"$lg"} flexShrink={1} >
            Remada lateral
          </Heading>

          <HStack alignItems="center">
            <BodySvg/>
            <Text color="$gray200" ml={1} textTransform="capitalize">Costa</Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={32}>
          <Image 
            w={"$full"}
            h={300}
            resizeMode="cover"
            mb={16}
            rounded={"$md"}
            alt="ext" 
            source={{uri: "https://www.realsimple.com/thmb/dsrD3SKItujteW9JynEcaHDtA0g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/exercises-for-aches-and-pains-2000-3ba8f13cfd8d42c6ac9c0ec0d7fe3cea.jpg"}} />
        
          <Box bg="$gray600" rounded={"$md"} pb={8} px={16}>
            <HStack alignItems="center" justifyContent="space-between" mb={16} mt={32}>
              <HStack alignItems="center" mb={8}>
                <SeriesSvg/>
                <Text color="$gray200" ml={10} textTransform="capitalize">3 séries</Text>
              </HStack>

              <HStack alignItems="center" mb={8}>
                <RepetitionsSvg/>
                <Text color="$gray200" ml={10} textTransform="capitalize">12 repeticoes</Text>
              </HStack>

            </HStack>
              <Button title="Marcar como Realizado" />
          </Box>
        
        </VStack>

      </ScrollView>
    </VStack>
  );
}