import { classNames } from 'shared/lib';
import { memo } from 'react';
import { Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
            </div>
        );
    }

    if (!comments?.length) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <Text title={t('Комментариев нет')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        className={cls.comment}
                        isLoading={isLoading}
                        comment={comment}
                        key={comment.id}
                    />
                ))
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    );
});
