import { useState } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className } : LoginFormProps) => {
    const { t } = useTranslation();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                value={login}
                onChange={setLogin}
                placeholder={t('Введите username')}
            />
            <Input
                type="text"
                className={cls.input}
                value={password}
                onChange={setPassword}
                placeholder={t('Введите пароль')}
            />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};