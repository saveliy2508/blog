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
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
