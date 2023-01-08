import { classNames } from 'shared/lib';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Mods } from 'shared/lib/classNames/classNames';
import useModal from 'shared/lib/hooks/useModal';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;
    const { close, isMounted, isClosing } = useModal({ animationDelay: 300, onClose, isOpen });

    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
