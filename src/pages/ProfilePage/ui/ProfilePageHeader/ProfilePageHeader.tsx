import { useTranslation } from 'react-i18next';
import { classNames, useAppDispatch } from 'shared/lib';
import { Button, ButtonTheme, Text } from 'shared/ui';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className } : ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = useMemo(() => authData?.id === profileData?.id, [authData?.id, profileData?.id]);

    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const onSave = useCallback(
        () => {
            if (authData) dispatch(updateProfileData(authData.id));
        },
        [authData.id, dispatch],
    );

    const onEdit = useCallback(
        () => {
            dispatch(profileActions.setReadonly(false));
        },
        [dispatch],
    );

    const onCancelEdit = useCallback(
        () => {
            dispatch(profileActions.cancelEdit());
        },
        [dispatch],
    );

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit
                ? (
                    <div className={cls.bntsWrapper}>
                        {readonly
                            ? (
                                <Button
                                    className={cls.editButton}
                                    onClick={onEdit}
                                    theme={ButtonTheme.OUTLINE}
                                >
                                    {t('Редактировать')}
                                </Button>
                            )
                            : (
                                <div>
                                    <Button
                                        className={cls.editButton}
                                        onClick={onCancelEdit}
                                        theme={ButtonTheme.OUTLINE_RED}
                                    >
                                        {t('Отменить')}
                                    </Button>
                                    <Button
                                        className={cls.editButton}
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onSave}
                                    >
                                        {t('Сохранить')}
                                    </Button>
                                </div>
                            )}
                    </div>
                ) : null}

        </div>
    );
};
