import { Center,Heading,Text } from "@gluestack-ui/themed";

type Props = {
    title: string;
};

export function ScreenHeader({title}: Props) {
  return (
    <Center bg="$trueGray600" pt={64} pb={21}>
        <Heading color="$trueGray100" fontSize={"$xl"} >
            {title}
        </Heading>
    </Center>
  );
}