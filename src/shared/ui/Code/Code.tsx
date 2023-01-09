import { classNames } from '@/shared/lib';
import { memo, useCallback } from 'react';
import CopyIcon from '@/shared/assets/icons/copy-icon.svg';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}><CopyIcon /></Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
