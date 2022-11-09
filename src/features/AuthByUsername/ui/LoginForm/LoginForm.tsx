import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Button, Input, Text, TextTheme,
} from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { DynamicModulesLoader, ReducersList } from 'shared/lib/components/DynamicModulesLoader/DynamicModulesLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    login: loginReducer,
};

const LoginForm = memo(({ className } : LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        <DynamicModulesLoader reducers={initialReducers}>
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
        </DynamicModulesLoader>
    );
});

export default LoginForm;
