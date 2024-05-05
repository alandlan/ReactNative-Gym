
import { Button as ButtonBase,ButtonGroup,ButtonText } from '@gluestack-ui/themed';
import {PressableProps} from 'react-native';

type ButtonProps = PressableProps & {
    title: string;
    variant?: 'primary' | 'secondary';
}


export function Button({title,variant = "primary", ...rest}:ButtonProps){
    return (
        <ButtonGroup>
            <ButtonBase 
                w="$full"
                h={56}
                bg={variant === "secondary" ? "$transparent" : "$green700" }
                borderWidth={variant === "secondary" ? 1 : 0}
                borderColor={"$green700"}
                rounded={"$sm"}
                $active-bg={variant === "secondary" ? "$trueGray500" : '$green500'}
                {...rest}
            >
                <ButtonText
                    color={variant === "secondary" ? "$green500" : "$white"}
                >
                    {title}
                </ButtonText>
            </ButtonBase>
        </ButtonGroup>
    )
};