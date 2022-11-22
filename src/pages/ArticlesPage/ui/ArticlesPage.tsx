import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {t('article_page_header')}
        </div>
    );
};

export default memo(ArticlesPage);
