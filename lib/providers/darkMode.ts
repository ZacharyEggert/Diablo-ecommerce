import { createContext, useContext } from "react";

const initialThemeState = {
    darkMode: false,
    toggleDarkMode: () => { },
};

export const themeState = createContext(initialThemeState);

export const useThemeState = () => useContext(themeState);