import { AlertCircleIcon, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, Input as GluestackInput,InputField, InputIcon, InputSlot } from '@gluestack-ui/themed';

import React from 'react';
import { KeyboardType, TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps{
    placeholder: string;
    icon?: any;
    keyboardType?: KeyboardType;
    bg?: string;
    isDisabled?: boolean;
    isPassword?: boolean;
    errorMessage?: string;
}


export function Input({placeholder,icon,keyboardType,bg, isDisabled,isPassword,errorMessage, ...rest} : InputProps){
    const isValidation = errorMessage ? true : false;

    return (
        <FormControl w={'$full'} mb={16} isInvalid={isValidation}>
            <GluestackInput
              bg={bg ? bg : '$gray600'}
              h={52}
              px={16}
              borderColor={"$gray700"}
              $focus-borderColor='$green700'
              isDisabled={isDisabled ? isDisabled : false}
              isInvalid={isValidation}
              $invalid={{
                borderColor: '$red500',
                borderWidth: 1
              }}
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

            {isValidation && (
                <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                        {errorMessage}
                    </FormControlErrorText>
                </FormControlError>
            )}
        </FormControl>
        
    )
}