import { memo, useState } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    AppLink, AppLinkTheme, Avatar, Button, HStack, Text, TextTheme,
} from 'shared/ui';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }:NavbarProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

    const authData = useSelector(getUserAuthData);

    const handleOpenLoginModal = () => {
        setIsOpenLoginModal(true);
    };

    const handleCloseLoginModal = () => {
        setIsOpenLoginModal(false);
    };

    const handleLogout = () => {
        dispatch(userActions.logout());
    };

    const isAdminPanelAvailable = isAdmin || isManager;

    if (authData) {
        return (
            <HStack justify="between" className={classNames(cls.navbar, {}, [className])}>
                <div>
                    <Text
                        className={cls.appName}
                        title={t('BLOG APP')}
                        theme={TextTheme.INVERTED}
                    />
                </div>
                <div className={cls.right}>
                    <AppLink
                        to={RoutePath.article_create}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.createBtn}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <Dropdown
                        direction="bottom left"
                        className={cls.dropdown}
                        items={[
                            ...(isAdminPanelAvailable ? [{
                                content: t('Админка'),
                                href: RoutePath.admin_panel,
                            }] : []),
                            {
                                content: t('Профиль пользователя'),
                                href: RoutePath.profile + authData.id,
                            },
                            {
                                content: t('Выйти'),
                                onClick: handleLogout,
                            },
                        ]}
                        trigger={(
                            <Avatar
                                size={30}
                                src={authData.avatar}
                            />
                        )}
                    />
                </div>
            </HStack>
        );
    }

    return (
        <HStack justify="end" className={classNames(cls.navbar, {}, [className])}>
            <Button onClick={handleOpenLoginModal}>
                {t('Войти')}
            </Button>
            {isOpenLoginModal && <LoginModal isOpen={isOpenLoginModal} onClose={handleCloseLoginModal} />}
        </HStack>
    );
});
