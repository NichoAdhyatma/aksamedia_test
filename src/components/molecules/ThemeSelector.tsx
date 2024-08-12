import React from 'react';
import {useTheme} from "@/hooks/useTheme";
import {Select} from "@/components/atoms/Select";


const ThemeSelector: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value as 'light' | 'dark' | 'system');
    };

    return (
        <div className="flex items-center justify-center space-x-4 p-4">
            <Select
                id="theme-select"
                value={theme}
                onChange={handleChange}
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
            </Select>
        </div>
    );
};

export default ThemeSelector;
