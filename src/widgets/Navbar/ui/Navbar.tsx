import React, {FC} from "react";
import {classNames} from 'shared/lib/classnames/classNames'
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'}>Main</AppLink>
                <AppLink to={'/about'}>About</AppLink>
            </div>
            <div className={cls.controls}>
                <LangSwitcher/>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};
