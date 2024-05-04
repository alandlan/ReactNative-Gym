import { Center, Spinner } from "@gluestack-ui/themed";


export function Loading() {
  return (
    <Center flex={1} bg={"$trueGray700"}>
        <Spinner color={"$trueGray500"} />
    </Center>
  );
}