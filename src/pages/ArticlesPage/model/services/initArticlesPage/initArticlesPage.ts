import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/ArticlesPageSlice';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlePage/initArticlesPage',
        async (_, ThunkApi) => {
            const {
                extra,
                rejectWithValue,
                getState,
                dispatch,
            } = ThunkApi;

            const inited = getArticlesPageInited(getState());

            if (!inited) {
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({ page: 1 }));
            }
        },
    );
