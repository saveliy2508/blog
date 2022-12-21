import { useTranslation } from 'react-i18next';
import { classNames, useAppDispatch } from 'shared/lib';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import {
    Button, ButtonTheme, HStack, Text,
} from 'shared/ui';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import cls from './EditableProfileCardHeader.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slices/editableProfileCardSlice';

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const { className } = props;
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
        [authData, dispatch],
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
        <HStack max justify="between" align="center" className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit
                ? (
                    <HStack justify="end" max className={cls.btnsWrapper}>
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
                    </HStack>
                ) : null}
        </HStack>
    );
});
