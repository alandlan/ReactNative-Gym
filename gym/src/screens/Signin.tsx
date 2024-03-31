import { View,Image } from "react-native";
import {theme} from '@theme/index';

import BackgroundImg from '@assets/background.png';

export function SignIn() {
  return (
    <View style={{flex:1, backgroundColor:theme.colors.gray700}}>
        <Image 
            source={BackgroundImg} 
            alt="Background"
            resizeMode="contain"
            style={{position:'absolute'}}
        />
    </View>
  );
}