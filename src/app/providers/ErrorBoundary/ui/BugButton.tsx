import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { t } from 'i18next';

export const BugButton = () => {
    const [error, setError] = useState(false);

    useEffect(() => () => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={() => setError(true)}>{t('Вызвать ошибку')}</Button>
    );
};
