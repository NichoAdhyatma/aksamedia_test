import {createContext, useState, ReactNode} from 'react';

export interface UsernameContextType {
    username?: string;
    fullName?: string;
    setUsername: (username?: string) => void;
    setFullName: (fullName?: string) => void;
}

export const UsernameContext = createContext<UsernameContextType | undefined>(undefined);

export const UsernameProvider = ({children}: { children: ReactNode }) => {

    const [username, setUsername] =
        useState<string | undefined>(localStorage.getItem('username') ?? '');

    const [fullName, setFullName] =
        useState<string | undefined>(localStorage.getItem('fullName') ?? '');

    return (
        <UsernameContext.Provider value={{username,fullName, setFullName, setUsername}}>
            {children}
        </UsernameContext.Provider>
    );
};


