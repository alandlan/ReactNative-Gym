import { UserDTO } from "@dtos/UserDTO";
import { createContext, useState } from "react";

export type AuthContextDataProps = {
    user: UserDTO;
    signIn: (email: string,password: string) => void;
}

export const AuthContext =  createContext<AuthContextDataProps>({} as AuthContextDataProps);

type AuthContextProviderProps = {
    children: React.ReactNode;
}

export function AuthContextProvider({children}: AuthContextProviderProps){
    const [user, setUser] = useState({
        id: "1",
        email: "alan@alan",
        name: "Alan",
        avatar: "alan"
    })

    function signIn(email: string, password: string){
        setUser({
            id: "1",
            email,
            name: "Alan",
            avatar: "alan"
        });
    }

    return (
        <AuthContext.Provider value={{user,signIn}}>
            {children}
        </AuthContext.Provider>
    );
}