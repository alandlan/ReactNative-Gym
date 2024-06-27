import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import { saveUser } from "@storage/storageUser";
import { createContext, useState } from "react";

export type AuthContextDataProps = {
    user: UserDTO;
    signIn: (email: string,password: string) => Promise<void>;
}

export const AuthContext =  createContext<AuthContextDataProps>({} as AuthContextDataProps);

type AuthContextProviderProps = {
    children: React.ReactNode;
}

export function AuthContextProvider({children}: AuthContextProviderProps){
    const [user, setUser] = useState<UserDTO>({} as UserDTO)

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

    return (
        <AuthContext.Provider value={{user,signIn}}>
            {children}
        </AuthContext.Provider>
    );
}