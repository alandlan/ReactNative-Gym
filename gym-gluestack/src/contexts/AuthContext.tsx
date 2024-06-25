import { UserDTO } from "@dtos/UserDTO";
import { createContext } from "react";

export type AuthContextDataProps = {
    user: UserDTO;
}

export const AuthContext =  createContext<AuthContextDataProps>({} as AuthContextDataProps);

type AuthContextProviderProps = {
    children: React.ReactNode;
}

export function AuthContextProvider({children}: AuthContextProviderProps){
    return (
        <AuthContext.Provider value={{
            user: {
                id: "1",
                email: "alan@alan",
                name: "Alan",
                avatar: "alan"
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
}