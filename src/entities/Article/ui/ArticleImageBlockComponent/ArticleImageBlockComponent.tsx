import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { memo } from 'react';
import { Text, TextAlign } from '@/shared/ui';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block?: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block?.src} alt={block?.title} className={cls.img} />
            {block?.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});
