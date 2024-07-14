
import { Button as ButtonBase,ButtonGroup,ButtonSpinner,ButtonText, IButtonProps } from '@gluestack-ui/themed';
import {PressableProps} from 'react-native';

type ButtonProps = PressableProps & {
    title: string;
    variant?: 'primary' | 'secondary';
    isLoading?: boolean;
}


export function Button({title,variant = 'primary', isLoading = false, ...rest}:ButtonProps){
    return (
        <ButtonGroup >
            <ButtonBase 
                w="$full"
                h={56}
                bg={variant === "secondary" ? "$transparent" : "$green700" }
                borderWidth={variant === "secondary" ? 1 : 0}
                borderColor={"$green700"}
                rounded={"$sm"}
                $active-bg={variant === "secondary" ? "$gray500" : '$green500'}
                isDisabled={isLoading}
                {...rest}
            >

                {isLoading ? (
                    <ButtonSpinner mr={"$1"} />
                ):(
                    <ButtonText
                        color={variant === "secondary" ? "$green500" : "$white"}
                    >
                        {title}
                    </ButtonText>
                )}
                
            </ButtonBase>
        </ButtonGroup>
    )
};