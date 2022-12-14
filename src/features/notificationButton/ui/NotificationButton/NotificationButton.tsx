import { memo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib';
import {
    Button, ButtonTheme, Icon, Popover,
} from '@/shared/ui';
import NotificationIcon from '@/shared/assets/icons/bell-icon.svg';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const handleDrawerOpen = () => {
        setIsOpen(true);
    };

    const handleDrawerClose = () => {
        setIsOpen(false);
    };

    const trigger = (
        <Button onClick={handleDrawerOpen} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    direction="bottom left"
                    className={classNames(cls.NotificationButton, {}, [className])}
                    trigger={trigger}
                >
                    <NotificationList
                        className={cls.notifications}
                    />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={handleDrawerClose}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
});
