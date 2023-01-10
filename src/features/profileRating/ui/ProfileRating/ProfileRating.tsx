import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui';
import { useGetProfileRating, useRateProfile } from '@/features/profileRating/api/profileRatingApi';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { t } = useTranslation();
    const {
        className,
        profileId,
    } = props;

    const authData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: authData?.id ?? '',
    });

    const [rateProfileMutation] = useRateProfile();

    const handleRateProfile = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    userId: authData?.id ?? '',
                    profileId,
                    rate: starsCount,
                    feedback,
                });
            } catch (err) {
                // handling error
                console.log(err);
            }
        },
        [authData?.id, profileId, rateProfileMutation],
    );

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateProfile(starsCount, feedback);
    }, [handleRateProfile]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateProfile(starsCount);
    }, [handleRateProfile]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    if (profileId === authData?.id) {
        return null;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            title={t('Оцените пользователя')}
            className={className}
        />
    );
});

export default ProfileRating;
