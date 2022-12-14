import { memo } from 'react';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader = memo(({ className } : LoaderProps) => (
    <div className={cls.spinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
));
