import { classNames } from 'shared/lib';
import { Modal } from 'shared/ui';
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
