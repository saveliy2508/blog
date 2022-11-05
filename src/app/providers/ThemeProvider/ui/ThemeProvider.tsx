import {
    ReactNode, useEffect, useMemo, useState,
} from 'react';
import { getTheme, ThemeContext } from 'app/providers/ThemeProvider';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(getTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        useMemo(() => (
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        ), [children, theme])
    );
};
