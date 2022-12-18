import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { articlesPageActions } from '../../slices/ArticlesPageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';

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
