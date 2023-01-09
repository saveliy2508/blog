import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import {
    fetchCommentsByArticleId,
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
    >(
        'aricleDetails/sendComment',
        async (text, ThunkApi) => {
            const {
                dispatch, extra, rejectWithValue, getState,
            } = ThunkApi;

            const userData = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());

            if (!userData || !text || !article) {
                return rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article.id,
                    userId: userData.id,
                    text,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByArticleId(article.id));

                return response.data;
            } catch (e) {
                return rejectWithValue('Неверный логин или пароль');
            }
        },
    );
