import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, useAppDispatch } from 'shared/lib';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModulesLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className } : ProfilePageProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ProfileCard />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
