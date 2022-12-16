import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
    classNames, DynamicModuleLoader, ReducersList, useAppDispatch,
} from 'shared/lib';
import { ArticleList } from 'entities/Article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { Page } from 'widgets';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlePage/fetchNextArticlesPage';
import { ArticlesPageFilters } from '../../ui/ArticlesPageFilters/ArticlesPageFilters';
import { articlesPageReducer, getArticles } from '../../model/slices/ArticlesPageSlice';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlesPage.module.scss';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');

    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);

    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const [searchParams, setSearchParams] = useSearchParams();

    const onLoadNextPart = useCallback(
        () => {
            dispatch(fetchNextArticlesPage());
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
