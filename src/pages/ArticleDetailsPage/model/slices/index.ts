import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types/index';
import {
    articleDetailsRecommendationReducer,
} from '../slices/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from '../slices/articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationReducer,
    comments: articleDetailsCommentsReducer,
});
