import { createContext, useContext } from "react";

export const themeContext = createContext({
    themeMode: 'dark',
    lightTheme() {},
    darkTheme() {}
})

export const ThemeProvider = themeContext.Provider;

export default function useTheme() {
    return useContext(themeContext);
}