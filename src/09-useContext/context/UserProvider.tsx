import { FC, useState } from "react";
import { User, UserContext } from "./UserContext";

interface UserProviderProps {
  children?: JSX.Element | JSX.Element[];
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {

    const [user, setUser] = useState<User>();

    const onSetUser = ( user: User ) => {
        setUser(user);
    }

    return (
        <UserContext.Provider 
            value={{ user, onSetUser }}
        >
            { children }
        </UserContext.Provider>
    );

};
