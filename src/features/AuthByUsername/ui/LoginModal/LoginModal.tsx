import React from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: ()=> void
}

export const LoginModal = ({ className, isOpen, onClose } : LoginModalProps) => (
    <div className={classNames(cls.LoginModal, {}, [className])}>
        <Modal isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </Modal>
    </div>
);
