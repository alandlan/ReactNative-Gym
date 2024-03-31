import { View,Image } from "react-native";
import {theme} from '@theme/index';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Text } from "react-native-paper";

export function SignIn() {
  return (
    <View style={{flex:1, backgroundColor:theme.colors.gray700}}>
        <Image 
            source={BackgroundImg} 
            alt="Background"
            resizeMode="contain"
            style={{position:'absolute'}}
        />
        <View style={{
            justifyContent:'center',
            alignItems:'center',
            marginTop:96,
            marginBottom: 96
        }}>
            <LogoSvg />
            <Text style={{color: theme.colors.gray100, fontSize: theme.fontSizes.sm}}>
                Treine sua mente e o seu corpo
            </Text>
        </View>

        <View style={{
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Text style={{
                color: theme.colors.gray100,
                fontSize: theme.fontSizes.md,
                fontFamily: theme.fonts.heading,
            
            }}>
                Acesse sua conta
            </Text>
        </View>

        

            
    </View>
  );
}