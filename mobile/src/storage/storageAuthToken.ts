import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_TOKEN } from "@storage/storageConfig";

type AuthTokenProps = {
    token: string;
    refresh_token: string;
}

export async function saveToken({token,refresh_token}: AuthTokenProps) {
    try {
        await AsyncStorage.setItem
            (AUTH_TOKEN, JSON.stringify({ token,refresh_token }));
    }
    catch (error) {
        throw error;
    }
}

export async function getToken() {
    try {
        const response = await AsyncStorage.getItem(AUTH_TOKEN);

        // const token = response;
        // const refresh_token = response;

        // return {token,refresh_token};

        console.log("TOKEN => ",response);

        const {token,refresh_token}: AuthTokenProps = response ? JSON.parse(response) : {};

        return {token,refresh_token};
    }
    catch (error) {
        throw error;
    }
}

export async function removeToken() {
    try {
        await AsyncStorage.removeItem(AUTH_TOKEN);
    }
    catch (error) {
        throw error;
    }
}