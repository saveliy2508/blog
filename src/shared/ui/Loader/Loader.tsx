import React from 'react';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className } : LoaderProps) => (
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
);
