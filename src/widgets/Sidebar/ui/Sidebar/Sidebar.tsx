import { classNames } from 'shared/lib';
import {
    Button, ButtonSize, ButtonTheme, AppLink, AppLinkTheme,
} from 'shared/ui';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/icons/menu-home-icon.svg';
import AboutIcon from 'shared/assets/icons/about-home-icon.svg';
import { useState } from 'react';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
                    <HomeIcon />
                    <span>{t('main')}</span>
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    <AboutIcon />
                    <span>{t('about')}</span>
                </AppLink>
            </div>
            <div className={cls.controls}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggle}
                className={cls.collapseBtn}
                square
                size={ButtonSize.L}
            >
                {'<'}
            </Button>
        </div>
    );
};
