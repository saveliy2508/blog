import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
    classNames, DynamicModuleLoader, ReducersList, useAppDispatch,
} from 'shared/lib';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/ArticlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import cls from './ArticlesPage.module.scss';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';

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
    const page = useSelector(getArticlesPageNum);
    const error = useSelector(getArticlesPageError);
    const hasMore = useSelector(getArticlesPageHasMore);
    const view = useSelector(getArticlesPageView);
    const inited = useSelector(getArticlesPageInited);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );

    const onLoadNextPart = useCallback(
        () => {
            dispatch(fetchNextArticlesPage());
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
