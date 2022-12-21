import { memo, useCallback } from 'react';
import {
    classNames, DynamicModuleLoader, ReducersList, useAppDispatch,
} from 'shared/lib';
import { Page } from 'widgets';
import { ArticleInfiniteList } from '../../ui/ArticleInfiniteList/ArticleInfiniteList';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlePage/fetchNextArticlesPage';
import { ArticlesPageFilters } from '../../ui/ArticlesPageFilters/ArticlesPageFilters';
import { articlesPageReducer } from '../../model/slices/ArticlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(
        () => {
            dispatch(fetchNextArticlesPage());
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
