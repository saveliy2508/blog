import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets';

interface ForbiddenPageProps {
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('У вас нет доступа к этой странице')}
        </Page>
    );
});

export default ForbiddenPage;
