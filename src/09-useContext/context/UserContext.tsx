import { createContext } from "react";

export interface User {
    name: string;
    loggedIn: boolean;
}

export interface UserContextProps {
    user: User | undefined;
    onSetUser: ( user: User ) => void;
}
  
export const UserContext = createContext<UserContextProps>({} as UserContextProps);