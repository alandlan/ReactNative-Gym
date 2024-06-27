import { UserDTO } from "@dtos/UserDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_STORAGE } from "./storageConfig";


export async function saveUser(user: UserDTO) {
    try {
        await AsyncStorage.setItem
            (USER_STORAGE, JSON.stringify(user));
    }
    catch (error) {
        throw error;
    }
}