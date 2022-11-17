import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency';
import { memo, useCallback } from 'react';

interface CurrencySelectProps {
    className?: string
    onChange?: (value: Currency) => void
    value?: string
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    readonly, className, value, onChange,
} : CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <Select
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});