import {
    createContext, Dispatch,
} from 'react';

export const Themes = {
    dark: 'dark',
    light: 'light',
} as const;

export type Theme = keyof typeof Themes;

export interface IThemeContext {
    theme: string;
    setTheme: Dispatch<Theme>;
}

export const ThemeContext = createContext<IThemeContext | null>(null);
