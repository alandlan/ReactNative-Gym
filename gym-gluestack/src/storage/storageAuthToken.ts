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

export async function getToken() {
    try {
        const token = await AsyncStorage.getItem(AUTH_TOKEN);
        return token;
    }
    catch (error) {
        throw error;
    }
}