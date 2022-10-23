import React, { FC } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme,
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        theme = AppLinkTheme.PRIMARY,
        className,
        to,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
