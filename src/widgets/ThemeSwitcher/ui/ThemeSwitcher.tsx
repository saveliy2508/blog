import React from "react";
import {classNames} from 'shared/lib/classnames/classNames'
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";
import ThemeLight from 'shared/assets/icons/theme-light.svg'
import ThemeDark from 'shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className} : ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === 'dark' ? <ThemeDark /> : <ThemeLight />}
        </Button>
    );
};
