import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_TOKEN } from "@storage/storageConfig";

export async function saveToken(token: string) {
    try {
        await AsyncStorage.setItem
            (AUTH_TOKEN, token);
    }
    catch (error) {
        throw error;
    }
}