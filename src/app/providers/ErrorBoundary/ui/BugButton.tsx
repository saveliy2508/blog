import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { t } from 'i18next';

/*
* TEST UI COMPONENT
* NEED TO DELETE
*/

export const BugButton = () => {
    const [error, setError] = useState(false);

    useEffect(() => () => {
        if (error) {
            throw new Error('Test');
        }
    }, [error]);

    const onError = () => {
        setError(true);
    };

    return (
        <Button onClick={onError}>{t('Вызвать ошибку')}</Button>
    );
};
