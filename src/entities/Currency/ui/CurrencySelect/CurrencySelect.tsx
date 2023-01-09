import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui';
import { Currency } from '../../model/types/currency';

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

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        readonly, className, value, onChange,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            label={t('Укажите валюту')}
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('Укажите валюту')}
            className={className}
            readonly={readonly}
            direction="top right"
        />
    );
});
