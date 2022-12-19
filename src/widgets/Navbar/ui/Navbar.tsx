import { memo, useState } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    AppLink, AppLinkTheme, Button, HStack, Text, TextTheme,
} from 'shared/ui';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }:NavbarProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

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
                <div>
                    <AppLink
                        to={RoutePath.article_create}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.createBtn}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <Button onClick={handleLogout}>
                        {t('Выйти')}
                    </Button>
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
