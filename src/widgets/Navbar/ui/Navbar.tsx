import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button onClick={() => setIsOpen(true)}>
                {t('Open modal')}
            </Button>
            <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
};
