import { Center,Heading,SafeAreaView,Text } from "@gluestack-ui/themed";

type Props = {
    title: string;
};

export function ScreenHeader({title}: Props) {

  return (
    <SafeAreaView bg="$gray600">
      <Center pt={40} pb={20} bg="$gray600" >
          <Heading fontFamily="$heading" color="$gray100" fontSize={"$xl"} >
              {title}
          </Heading> 
        
      </Center>
    </SafeAreaView>
    
  );
}