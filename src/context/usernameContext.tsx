import {createContext, useState, ReactNode} from 'react';

export interface UsernameContextType {
    username?: string;
    setUsername: (username?: string) => void;
}

export const UsernameContext = createContext<UsernameContextType | undefined>(undefined);

export const UsernameProvider = ({children}: { children: ReactNode }) => {

    const [username, setUsername] =
        useState<string | undefined>(localStorage.getItem('username') ?? '');

    return (
        <UsernameContext.Provider value={{username, setUsername}}>
            {children}
        </UsernameContext.Provider>
    );
};


