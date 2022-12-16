import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/ArticlesPageSlice';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlePage/initArticlesPage',
        async (searchParams, ThunkApi) => {
            const {
                extra,
                rejectWithValue,
                getState,
                dispatch,
            } = ThunkApi;

            const inited = getArticlesPageInited(getState());

            if (!inited) {
                const orderFormUrl = searchParams.get('order') as SortOrder;
                const sortFormUrl = searchParams.get('sort') as ArticleSortField;
                const searchFormUrl = searchParams.get('search');
                const typeFormUrl = searchParams.get('type') as ArticleType;

                if (orderFormUrl) {
                    dispatch(articlesPageActions.setOrder(orderFormUrl));
                }
                if (sortFormUrl) {
                    dispatch(articlesPageActions.setSort(sortFormUrl));
                }
                if (searchFormUrl) {
                    dispatch(articlesPageActions.setSearch(searchFormUrl));
                }

                if (typeFormUrl) {
                    dispatch(articlesPageActions.setType(typeFormUrl));
                }

                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
