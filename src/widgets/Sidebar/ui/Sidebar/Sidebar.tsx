import { classNames } from '@/shared/lib';
import {
    Button, ButtonSize, ButtonTheme,
} from '@/shared/ui';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { getSidebarItems } from '../../model/selectors/getSidebarItem';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemList = useMemo(() => sidebarItemsList
        .map((item) => (
            <SidebarItem
                key={item.path}
                collapsed={collapsed}
                item={item}
            />
        )), [collapsed, sidebarItemsList]);

    return (
        <aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <VStack role="navigation" gap="16" className={cls.links}>
                {itemList}
            </VStack>
            <div className={cls.controls}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggle}
                className={cls.collapseBtn}
                square
                size={ButtonSize.L}
            >
                {'<'}
            </Button>
        </aside>
    );
});
