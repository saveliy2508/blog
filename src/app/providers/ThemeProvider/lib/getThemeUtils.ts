import { Theme, Themes } from './ThemeContext';

export enum LocalStorageKeys {
    THEME = 'theme'
}

export const getTheme = () => {
    const theme = `${window?.localStorage?.getItem(
        LocalStorageKeys.THEME,
    )}` as Theme;

    if (Object.values(Themes).includes(theme)) return theme;

    const userMediaLight = window.matchMedia(
        `(prefers-color-scheme: ${Themes.light})`,
    );

    return userMediaLight.matches ? Themes.light : Themes.dark;
};
