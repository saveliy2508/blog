import { memo, useState } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    AppLink, AppLinkTheme, Avatar, Button, HStack, Text, TextTheme, Dropdown,
} from 'shared/ui';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { NotificationButton } from 'features/notificationButton';
import { AvatarDropdown } from 'features/avatarDropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }:NavbarProps) => {
    const { t } = useTranslation();

    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

    const authData = useSelector(getUserAuthData);

    const handleOpenLoginModal = () => {
        setIsOpenLoginModal(true);
    };

    const handleCloseLoginModal = () => {
        setIsOpenLoginModal(false);
    };

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
                    <NotificationButton className={cls.notificationButton} />
                    <AppLink
                        to={RoutePath.article_create}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.createBtn}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <HStack gap="16" className={cls.actions}>
                        <AvatarDropdown />
                    </HStack>
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
