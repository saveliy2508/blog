import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    className?: string,
    item: SidebarItemType,
    collapsed: boolean
}

export const SidebarItem = ({ className, item, collapsed } : SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            className={classNames(cls.SidebarItem, { collapsed }, [className])}
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
        >
            {item.Icon}
            <span>{t(item.text)}</span>
        </AppLink>
    );
};
