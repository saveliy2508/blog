import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui';
import { Country } from '../../model/types/country';

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

export const CountrySelect = memo((props : CountrySelectProps) => {
    const {
        readonly, className, value, onChange,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <ListBox
            label={t('Укажите страну')}
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('Укажите страну')}
            className={className}
            readonly={readonly}
            direction="top"
        />
    );
});
