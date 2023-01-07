import { classNames } from 'shared/lib';
import {
    CSSProperties,
    HTMLAttributeAnchorTarget,
    memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui';
import { FixedSizeGrid } from 'react-window';
// @ts-ignore
import AutoSizer from 'react-virtualized-auto-sizer';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        virtualized = true,
    } = props;

    const { t } = useTranslation();

    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 4;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);
    const listHeight = isBig ? 700 * rowCount : Math.ceil(330 * rowCount);

    const cell = ({ columnIndex, rowIndex, style } : {
        columnIndex: number,
        rowIndex: number,
        style: CSSProperties,
    }) => {
        const index = !isBig ? (rowIndex) * 4 + (columnIndex + 1) : rowIndex;
        if (articles[index] !== undefined) {
            return (
                <ArticleListItem
                    style={style}
                    article={articles[index]}
                    view={view}
                    target={target}
                    key={`cell${index}`}
                    className={cls.card}
                />
            );
        }
        return null;
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статей нет')} />
            </div>
        );
    }

    return (
        <>
            {virtualized ? (
                <AutoSizer>
                    {/* @ts-ignore */}
                    {({ height, width }) => (
                        <FixedSizeGrid
                            columnCount={itemsPerRow}
                            columnWidth={isBig ? 1000 : 260}
                            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                            height={listHeight}
                            rowCount={rowCount}
                            rowHeight={isBig ? 700 : 330}
                            width={width}
                        >
                            {cell}
                        </FixedSizeGrid>
                    )}
                </AutoSizer>
            ) : (
                articles.map((item) => (
                    <ArticleListItem
                        article={item}
                        view={view}
                        key={item.id}
                        className={cls.card}
                        target={target}
                    />
                ))
            )}
            <div
                className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            >
                {isLoading && getSkeletons(view)}
            </div>
        </>
    );
});
