import { View,Image, ScrollView, SafeAreaView } from "react-native";
import {theme} from '@theme/index';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Text,TextInput } from "react-native-paper";
import { Input } from "@components/Input";
import React, { useState } from "react";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Heading } from "@components/Commom";

export function SignIn() {
    const [password, setPassword] = useState('');  
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleNavigateToSignUp() {
        navigation.navigate('signUp');
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <View style={{
                flex:1, 
                padding:20,
            }}>
                <Image 
                    source={BackgroundImg} 
                    defaultSource={BackgroundImg}
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
                    <Heading>
                        Acesse sua conta
                    </Heading>

                    <View style={{
                        width:"100%"
                    }}>
                        <Input label="E-mail" keyboardType="email-address" />
                        <Input 
                            label="Senha" 
                            onChangeText={text => setPassword(text)} 
                            secureTextEntry={isPasswordSecure} 
                            value={password} right={
                                <TextInput.Icon 
                                    icon={isPasswordSecure ? "eye-off" : "eye"}
                                    onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}  />
                                } 
                        />
                        <Button 
                            children="Acessar"
                            mode="contained" 
                            title="Acessar" onPress={() => {}} 
                        />

                        <Heading style={{
                            marginBottom: 16,
                            marginTop: 56
                        }}>
                            Não tem uma conta?
                        </Heading>
                        <Button 
                            children="CriarConta"
                            mode="outlined" 
                            title="Criar Conta" onPress={handleNavigateToSignUp} 
                        />
                    </View>
                </View>
                    
            </View>
        </ScrollView>
    );
}