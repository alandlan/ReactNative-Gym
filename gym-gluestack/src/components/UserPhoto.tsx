import { Image } from '@gluestack-ui/themed';
import { ImageProps } from 'react-native';

type Props = ImageProps & {
    size: number;
}

export function UserPhoto({size, ...props}: Props){
    return (
        <Image 
            w={size}
            h={size}
            rounded={"$full"}
            borderWidth={2}
            borderColor={"$gray400"}
            {...props}
            />
    )
}