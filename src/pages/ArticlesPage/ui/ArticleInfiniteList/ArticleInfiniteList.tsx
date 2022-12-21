import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
import { Text } from 'shared/ui';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/ArticlesPageSlice';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import cls from './ArticleInfiniteList.module.scss';

interface ArticleInfiniteListProps {
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const error = useSelector(getArticlesPageError);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const [searchParams, setSearchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, []);

    if (error) {
        return <Text text={t('Произошла ошибка при загрузке статей')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={cls.list}
        />
    );
});
