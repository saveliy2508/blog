import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?:TextTheme
}

export const Text = ({
    className, title, text, theme = TextTheme.PRIMARY,
} : TextProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
