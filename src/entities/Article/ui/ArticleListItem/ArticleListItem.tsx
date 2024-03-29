import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import {
    CSSProperties,
    DetailedHTMLProps, HTMLAttributeAnchorTarget, memo, StyleHTMLAttributes, useCallback,
} from 'react';
import {
    AppLink,
    Avatar, Button, ButtonTheme, Card, Icon, Text,
} from '@/shared/ui';
import EyeIcon from '@/shared/assets/icons/eye-icon.svg';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    style?: CSSProperties;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();
    const {
        className,
        article,
        view,
        target,
        style,
    } = props;

    const types = <Text text={article.type.join(', ')} className={cls.types} />;

    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks
            .find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div style={style} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} className={cls.avatar} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.createdAt} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink target={target} to={RoutePath.article_details + article.id}>
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div style={style} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <AppLink target={target} to={RoutePath.article_details + article.id}>
                <Card>
                    <div className={cls.imageWrapper}>
                        <img src={article.img} className={cls.img} alt={article.title} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </AppLink>
        </div>
    );
});
