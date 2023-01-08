import { classNames } from 'shared/lib';
import { memo, ReactNode, useCallback } from 'react';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className, value, tabs, onTabClick,
    } = props;

    const clickHandle = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);
    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    className={cls.tab}
                    theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
