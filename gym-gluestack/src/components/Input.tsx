import { Input as GluestackInput,InputField, InputIcon, InputSlot } from '@gluestack-ui/themed';

import React from 'react';
import { KeyboardType, TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps{
    placeholder: string;
    icon: any;
    keyboardType?: KeyboardType;
}


export function Input({placeholder,icon,keyboardType,...rest} : InputProps){

    return (
        <GluestackInput
              bg='$gray700'
              h={52}
              px={16}
              mb={16}
              borderColor={"$gray700"}
              $focus-borderColor='$green700'
            >
              <InputSlot>
                  <InputIcon as={icon} />
              </InputSlot>
            <InputField
                placeholder={placeholder}
                placeholderTextColor="$gray400"
                color="$white"
                fontSize="$md"
                fontFamily='$body'
                h={52}
                keyboardType={keyboardType ? keyboardType : 'default'}
                {...rest}
            />
        </GluestackInput>
    )
}