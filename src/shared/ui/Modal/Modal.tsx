import {
    MouseEvent, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib';
import { Mods } from 'shared/lib/classNames/classNames';
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
    const [isClosing, setIsClosing] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 200);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

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
                <Overlay className={cls.overlay} onClick={closeHandler} />
                <div className={classNames(cls.content, { [cls.contentOpened]: isOpen })}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
