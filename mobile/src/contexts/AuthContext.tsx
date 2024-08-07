import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import { getToken, removeToken, saveToken } from "@storage/storageAuthToken";
import { getUser, removeUser, saveUser } from "@storage/storageUser";
import { createContext, useEffect, useState } from "react";

export type AuthContextDataProps = {
    user: UserDTO;
    updateUserProfile: (userData: UserDTO) => Promise<void>;
    signIn: (email: string,password: string) => Promise<void>;
    signOut: () => Promise<void>;
    isLoading: boolean;
}

export const AuthContext =  createContext<AuthContextDataProps>({} as AuthContextDataProps);

type AuthContextProviderProps = {
    children: React.ReactNode;
}

export function AuthContextProvider({children}: AuthContextProviderProps){
    const [user, setUser] = useState<UserDTO>({} as UserDTO)
    const [isLoading, setIsLoading] = useState(true);

    async function updateUserAndToken(userData: UserDTO, token: string){
        try{
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setUser(userData);
        }catch(error){
            throw error;
        }
    }

    async function saveUserAndToken(userData: UserDTO, token: string, refresh_token: string){
        try{
            await saveUser(userData);
            await saveToken({token,refresh_token});
        }catch(error){
            throw error;
        }
    }

    async function signIn(email: string, password: string){
        try {
            const { data } = await api.post('/sessions',{email,password});

            if(data.user && data.token && data.refresh_token){
                setIsLoading(true);

                await saveUserAndToken(data.user,data.token,data.refresh_token);

                updateUserAndToken(data.user,data.token);
            }
        } catch (error) {
            throw error;
        }
        finally{
            setIsLoading(false);
        }
    }

    async function loadUser(){
        try {
            setIsLoading(true);

            const userLogged = await getUser();
            const {token} = await getToken();

            if(token && userLogged){
                updateUserAndToken(userLogged,token);
            }

        } catch (error) {
            throw error;
        }finally{
            setIsLoading(false);
        }
    }

    async function signOut(){
        try {
            setIsLoading(true);
            setUser({} as UserDTO);
            await removeUser();
            await removeToken();
        } catch (error) {
            throw error;
        }finally{
            setIsLoading(false);
        }
    }

    async function updateUserProfile(userData: UserDTO){
        try{
            setUser(userData);
            await saveUser(userData);
        }catch(error){
            throw error;
        }
    }

    useEffect(() => {
        loadUser();
    },[]);

    useEffect(() => {
        const subscribe = api.registerInterceptTokenManager(signOut);

        return () => {
            subscribe();
        }
    },[signOut]);

    return (
        <AuthContext.Provider value={{
                user,
                updateUserProfile,
                signIn,
                signOut,
                isLoading
            }}>
            {children}
        </AuthContext.Provider>
    );
}