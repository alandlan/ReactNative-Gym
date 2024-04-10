import { theme } from '@theme/index';
import { Button as ButtonNativePaper,ButtonProps } from 'react-native-paper';

type Props = ButtonProps & {
    title: string;
    mode: "contained" | "outlined";
}

export function Button({title,mode,...rest}:Props){
    return (
        <ButtonNativePaper 
            buttonColor={mode === "outlined" ? "transparent" : theme.colors.green700}
            
            contentStyle={{
                height: 56,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: mode === "outlined" ? 1 : 0,
                borderColor: theme.colors.green700,
                borderRadius: 8,
            }}
            style={{
                borderRadius: 8, 
                marginTop: 16, 
            }}
            labelStyle={{
                fontFamily: theme.fonts.heading, 
                fontSize: theme.fontSizes.md, 
                color: mode === "outlined" ? theme.colors.green700 : theme.colors.white,
                
            }}
            {...rest}
        >
            {title}
        </ButtonNativePaper>
    )
}