import { classNames } from '@/shared/lib';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props : AvatarProps) => {
    const {
        className, src, alt, size,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    return (
        <img
            src={src}
            style={{ height: size, width: size }}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
