import { themeState } from 'lib/providers/darkMode';
import React, { useEffect, useState } from 'react';

const DarkModeProvider: React.FC = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const localDarkMode = localStorage.getItem('darkMode');
        if (localDarkMode === 'true') {
            setDarkMode(true);
            document.querySelector('html')!.classList.add('dark');
        } else if (localDarkMode === 'false') {
            setDarkMode(false);
            document.querySelector('html')!.classList.remove('dark');
        } else {
            setDarkMode(true);
            document.querySelector('html')!.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((darkMode) => {
            document.querySelector('html')!.classList.remove('dark');
            if (!darkMode) {
                document.querySelector('html')!.classList.add('dark');
            }

            localStorage.setItem('darkMode', JSON.stringify(!darkMode));

            return !darkMode;
        });
    };

    return React.createElement(
        themeState.Provider,
        { value: { darkMode, toggleDarkMode } },
        children
    );
};

export default DarkModeProvider;
