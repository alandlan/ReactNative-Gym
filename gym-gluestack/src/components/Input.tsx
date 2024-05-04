import { Input as GluestackInput,InputField, InputIcon, InputSlot, MailIcon } from '@gluestack-ui/themed';

import React, { useState } from 'react';
import { KeyboardType, TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps{
    placeholder: string;
    icon: any;
    keyboardType?: KeyboardType;
}


export function Input({placeholder,icon,keyboardType,...rest} : InputProps){
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const borderColor = isFocused ? '$green800' : '$trueGray700';

    return (
        <GluestackInput
              bg='$trueGray700'
              h={52}
              px={16}
              mb={16}
              borderColor={borderColor}
            >
              <InputSlot>
                  <InputIcon as={icon} />
              </InputSlot>
            <InputField
                placeholder={placeholder}
                placeholderTextColor="$trueGray400"
                color="$white"
                fontSize="$md"
                fontFamily='$body'
                h={52}
                // borderColor='$green800'
                keyboardType={keyboardType ? keyboardType : 'default'}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...rest}
            />
        </GluestackInput>
    )
}