import { View } from "react-native";
import { Avatar } from "react-native-paper";


type UserPhotoProps = {
    size: number;
}

export function UserPhoto({size}: UserPhotoProps) {
    return (
        <Avatar.Image size={size} source={{uri: "https://avatars.githubusercontent.com/u/20859616?v=4"}} /> 
    );
}