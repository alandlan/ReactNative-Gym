import { Center,Heading,Text } from "@gluestack-ui/themed";

type Props = {
    title: string;
};

export function ScreenHeader({title}: Props) {
  return (
    <Center bg="$gray600" pt={64} pb={21}>
        <Heading color="$gray100" fontSize={"$xl"} >
            {title}
        </Heading>
    </Center>
  );
}