import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page/Page';
import { StartRating } from '@/shared/ui/StarRating/StartRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            <div>
                <Counter />
                <RatingCard
                    title="Как вам статья?"
                    feedbackTitle="Оставьте отзыв о статье"
                    hasFeedback
                />
            </div>
        </Page>
    );
});

export default MainPage;
