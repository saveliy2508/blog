import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { Page } from 'shared/ui';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            <div>
                <Counter />
            </div>
        </Page>
    );
});

export default MainPage;
