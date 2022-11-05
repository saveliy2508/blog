import { useContext } from 'react';
import { ThemeContext, Themes } from './ThemeContext';

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        setTheme(theme === Themes.light ? Themes.dark : Themes.light);
    };

    return { theme, toggleTheme };
};
