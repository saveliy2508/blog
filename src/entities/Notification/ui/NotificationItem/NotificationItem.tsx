import { classNames } from '@/shared/lib';
import { memo } from 'react';
import { AppLink, Card, Text } from '@/shared/ui';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const {
        className,
        item,
    } = props;
    const content = (
        <Card
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );
    if (item.href) {
        return (
            <AppLink
                className={cls.link}
                to={item.href}
                target="_blank"
            >
                {content}
            </AppLink>
        );
    }
    return content;
});
