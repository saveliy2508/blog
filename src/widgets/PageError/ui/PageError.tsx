import { classNames } from '@/shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, VStack } from '@/shared/ui';
import { memo } from 'react';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError = memo(({ className } : PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <VStack gap="16" align="center" justify="center" className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </VStack>
    );
});
