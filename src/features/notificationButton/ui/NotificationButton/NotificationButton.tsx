import { classNames } from 'shared/lib';
import { memo } from 'react';
import {
    Button, ButtonTheme, Icon, Popover,
} from 'shared/ui';
import NotificationIcon from 'shared/assets/icons/bell-icon.svg';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    return (
        <Popover
            direction="bottom left"
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            )}
        >
            <NotificationList
                className={cls.notifications}
            />
        </Popover>
    );
});
