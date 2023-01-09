import { EditableProfileCard } from '@/features/editableProfileCard';
import { Text, VStack } from '@/shared/ui';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page/Page';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
}

const ProfilePage = (props: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <Page>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
