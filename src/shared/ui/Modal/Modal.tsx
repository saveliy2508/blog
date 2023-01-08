import { ReactNode } from 'react';
import { classNames } from 'shared/lib';
import { Mods } from 'shared/lib/classNames/classNames';
import useModal from 'shared/lib/hooks/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    lazy?: boolean;
    onClose?: ()=> void;
    children: ReactNode;
}

export const Modal = ({
    className, children, isOpen, lazy, onClose,
} : ModalProps) => {
    const { close, isMounted, isClosing } = useModal({ animationDelay: 200, onClose, isOpen });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls.theme]: true,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay className={cls.overlay} onClick={close} />
                <div className={classNames(cls.content, { [cls.contentOpened]: isOpen })}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
