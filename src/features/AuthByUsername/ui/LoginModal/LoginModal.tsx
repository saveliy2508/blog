import { Loader, Modal } from 'shared/ui';
import { memo, Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = memo(({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
));
