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

export async function getUser() {
    try {
        const storage = await AsyncStorage.getItem(USER_STORAGE);
        const user: UserDTO = storage ? JSON.parse(storage) : {};
        return user;
    }
    catch (error) {
        throw error;
    }
}

export async function removeUser() {
    try {
        await AsyncStorage.removeItem(USER_STORAGE);
    }
    catch (error) {
        throw error;
    }
}