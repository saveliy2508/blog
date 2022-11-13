import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { memo } from 'react';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <div>
                <Counter />
            </div>
        </div>
    );
});

export default MainPage;
