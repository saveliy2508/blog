import { Loader, Modal } from 'shared/ui';
import { Suspense } from 'react';
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Suspense fallback={<Loader />}>
        <Modal isOpen={isOpen} onClose={onClose}>
            <LoginFormAsync />
        </Modal>
    </Suspense>
);
