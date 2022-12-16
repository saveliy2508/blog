import {
    ArticleDetailsPageRecommendationsSchema,
} from './ArticleDetailsPageRecommendationsSchema';

import {
    ArticleDetailsCommentsSchema,
} from './ArticleDetailsCommentsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsPageRecommendationsSchema;
}
