import { memo, useCallback } from 'react';
import {
    classNames, useAppDispatch, DynamicModuleLoader, ReducersList,
} from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Button, Input, Text, TextTheme,
} from 'shared/ui';
import { useSelector } from 'react-redux';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: ()=> void;
}

const initialReducers: ReducersList = {
    login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess } : LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(
        async () => {
            const result = await dispatch(loginByUsername({ username, password }));
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess();
            }
        },
        [dispatch, onSuccess, password, username],
    );

    return (
        <DynamicModuleLoader reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
