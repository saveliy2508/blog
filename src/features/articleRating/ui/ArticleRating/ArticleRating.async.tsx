import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui';
import { ArticleRatingProps } from '../ArticleRating/ArticleRating';

export const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height="140" />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
