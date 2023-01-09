import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <div className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? `Редактирование статьи с ID = ${id}` : 'Создание новой статьи'}
        </div>
    );
});

export default ArticleEditPage;
