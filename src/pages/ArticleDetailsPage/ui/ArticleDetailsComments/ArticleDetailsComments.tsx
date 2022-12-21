import { useTranslation } from 'react-i18next';
import { classNames, useAppDispatch } from 'shared/lib';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation();
    const { className, id } = props;
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);

    return (
        <div className={classNames('', {}, [className])}>
            <Text
                title={t('Комментарии')}
            />
            <AddCommentForm
                onSendComment={onSendComment}
            />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </div>
    );
});
