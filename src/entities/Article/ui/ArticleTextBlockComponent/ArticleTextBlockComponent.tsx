import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { memo } from 'react';
import { Text } from '@/shared/ui';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text
                    title={block.title}
                    className={cls.title}
                />
            )}
            {block.paragraphs.map((paragraph, index) => (
                <Text
                    key={paragraph}
                    text={paragraph}
                    className={cls.paragraphs}
                />
            ))}
        </div>
    );
});
