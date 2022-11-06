import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={() => setIsOpen(true)}>
                Open modal
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eveniet id iste iusto laudantium pariatur porro, veritatis? Aliquam consequatur deserunt dolorum eaque, molestiae molestias officiis optio sapiente, similique veritatis voluptate!
            </Modal>
        </div>
    );
};
