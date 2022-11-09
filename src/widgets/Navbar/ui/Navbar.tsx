import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
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
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button onClick={handleLogout}>
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button onClick={handleOpenLoginModal}>
                {t('Войти')}
            </Button>
            {isOpenLoginModal && <LoginModal isOpen={isOpenLoginModal} onClose={handleCloseLoginModal} />}
        </div>
    );
};
