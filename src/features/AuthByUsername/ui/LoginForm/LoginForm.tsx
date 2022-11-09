import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Button, Input, Text, TextTheme,
} from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className } : LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(
        () => {
            dispatch(loginByUsername({ username, password }));
        },
        [dispatch, password, username],
    );

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t(error)} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                type="text"
                className={cls.input}
                onChange={onChangeUsername}
                placeholder={t('Введите username')}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                onChange={onChangePassword}
                placeholder={t('Введите пароль')}
                value={password}
            />
            <Button disabled={isLoading} onClick={onLoginClick} className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
});
