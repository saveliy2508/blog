import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { memo } from 'react';

interface AdminPanelPageProps {
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const { t } = useTranslation();
    return (
        <div>
            ADMIN PAGE
        </div>
    );
});

export default AdminPanelPage;
