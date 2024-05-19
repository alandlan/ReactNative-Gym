import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, VStack } from "@gluestack-ui/themed";


export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center mt={16} px={24}>
          <UserPhoto
            source={{uri: "https://avatars.githubusercontent.com/u/20859616?s=400&v=4"}}
            alt="User photo"
            size={96}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}