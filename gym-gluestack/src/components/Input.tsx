import { Input as GluestackInput,InputField, InputIcon, InputSlot } from '@gluestack-ui/themed';

import React from 'react';
import { KeyboardType, TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps{
    placeholder: string;
    icon?: any;
    keyboardType?: KeyboardType;
    bg?: string;
    isDisabled?: boolean;
    isPassword?: boolean;
}


export function Input({placeholder,icon,keyboardType,bg, isDisabled,isPassword,...rest} : InputProps){

    return (
        <GluestackInput
              bg={bg ? bg : '$gray600'}
              h={52}
              px={16}
              mb={16}
              borderColor={"$gray700"}
              $focus-borderColor='$green700'
              isDisabled={isDisabled ? isDisabled : false}
            >
            {icon && (
              <InputSlot>
                  <InputIcon as={icon} />
              </InputSlot>
            )}
            <InputField
                placeholder={placeholder}
                placeholderTextColor="$gray300"
                color="$white"
                fontSize="$md"
                fontFamily='$body'
                h={52}
                type={isPassword ? 'password' : 'text'}
                keyboardType={keyboardType ? keyboardType : 'default'}
                {...rest}
            />
        </GluestackInput>
    )
}