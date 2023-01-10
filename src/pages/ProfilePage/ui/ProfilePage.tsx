import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { Text, VStack } from '@/shared/ui';
import { Page } from '@/widgets/Page/Page';
import ProfileRating from '@/features/profileRating/ui/ProfileRating/ProfileRating';

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
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
