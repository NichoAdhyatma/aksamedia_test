import React from 'react';
import {useTheme} from "@/hooks/useTheme.tsx";


const ThemeSelector: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value as 'light' | 'dark' | 'system');
    };

    return (
        <div className="flex items-center justify-center space-x-4 p-4">
            <label htmlFor="theme-select" className="mr-2">Theme:</label>
            <select
                id="theme-select"
                value={theme}
                onChange={handleChange}
                className="border bg-white rounded-lg dark:bg-gray-800 px-2 py-1"
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
            </select>
        </div>
    );
};

export default ThemeSelector;
