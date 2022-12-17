import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(
        () => {
            navigate(RoutePath.articles);
        },
        [navigate],
    );

    const onEditArticle = useCallback(
        () => {
            navigate(`${RoutePath.article_details}${article?.id}/edit`);
        },
        [article?.id, navigate],
    );

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button
                onClick={onBackToList}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    className={cls.editBtn}
                    onClick={onEditArticle}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});
