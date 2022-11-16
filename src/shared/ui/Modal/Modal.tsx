import {
    FC, MouseEvent, MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib';
import { Portal } from 'shared/ui';
import { Mods } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string,
    isOpen?: boolean,
    lazy?: boolean,
    onClose?: ()=> void
}

export const Modal: FC<ModalProps> = ({
    className, children, isOpen, lazy, onClose,
}) => {
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

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

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
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={classNames(cls.content, { [cls.contentOpened]: isOpen })} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
