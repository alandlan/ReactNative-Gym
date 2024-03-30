import { View } from 'react-native';
import { ActivityIndicator, PaperProvider } from 'react-native-paper';
import { theme } from '@theme/index';
import { Loading } from '@components/Loading';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={{flex: 1,justifyContent: "center", alignItems: "center"}}>
        <Loading />
      </View>
    </PaperProvider>
  );
}
