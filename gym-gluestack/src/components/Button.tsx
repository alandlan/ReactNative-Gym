
import { Button as ButtonBase,ButtonGroup,ButtonText } from '@gluestack-ui/themed';
import {PressableProps} from 'react-native';

type ButtonProps = PressableProps & {
    title: string;
}


export function Button({title, ...rest}:ButtonProps){
    return (
        <ButtonGroup>
            <ButtonBase 
                w="$full"
                h={56}
                bg="$green700"
                rounded={"$sm"}
                $active-bg={'$green500'}
                {...rest}
            >
                <ButtonText>{title}</ButtonText>
            </ButtonBase>
        </ButtonGroup>
    )
};