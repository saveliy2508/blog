import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from 'entities/Country';
import { memo, useCallback } from 'react';

interface CountrySelectProps {
    className?: string
    onChange?: (value: Country) => void
    value?: string
    readonly?: boolean
}

const options = [
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.UKRAINE, content: Country.UKRAINE },
    { value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo(({
    readonly, className, value, onChange,
} : CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <Select
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
