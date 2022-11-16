import {
    ChangeEvent,
    InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    placeholder?: string;
    autofocus?: boolean;
    onChange?: (value: string) => void;
}

export const Input = memo((props : InputProps) => {
    const {
        className, autofocus, value, onChange, type = 'text', placeholder, ...otherProps
    } = props;

    const ref = useRef() as MutableRefObject<HTMLInputElement>;

    const [isFocused, setIsFocused] = useState(false);

    const [caretPosition, setCaretPosition] = useState(0);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {placeholder}
                    {'>'}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 8.9}px` }} />}
            </div>
        </div>
    );
});
