import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { memo } from 'react';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
    const { t } = useTranslation();
    const { className, onClick } = props;
    return (
        <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
    );
});
