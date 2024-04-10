import { TextInput,TextInputProps } from 'react-native-paper';
import {theme} from '@theme/index';

export function Input({...rest}:TextInputProps){
    return (
        <TextInput 
        mode="outlined"
        textColor={theme.colors.green700}
        activeOutlineColor={theme.colors.green700}
        style={{
            backgroundColor: theme.colors.gray700,
            marginBottom: 4,
            fontFamily: theme.fonts.body,
        }}
        {...rest}
        />
    )
}