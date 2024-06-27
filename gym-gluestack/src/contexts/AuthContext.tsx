import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import { getUser, removeUser, saveUser } from "@storage/storageUser";
import { createContext, useEffect, useState } from "react";

export type AuthContextDataProps = {
    user: UserDTO;
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

    async function signIn(email: string, password: string){
        try {
            const { data } = await api.post('/sessions',{email,password});

            if(data.user){
                setUser(data.user);
                saveUser(data.user);
            }
        } catch (error) {
            throw error;
        }
    }

    async function loadUser(){
        try {
            const user = await getUser();

            if(user){
                setUser(user);
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
        } catch (error) {
            throw error;
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadUser();
    },[]);

    return (
        <AuthContext.Provider value={{
                user,
                signIn,
                signOut,
                isLoading
            }}>
            {children}
        </AuthContext.Provider>
    );
}