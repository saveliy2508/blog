import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib';
import cls from './RatingCard.module.scss';
import {
    Button, ButtonSize, ButtonTheme, Card, HStack, Input, Modal, Text, VStack,
} from '@/shared/ui';
import { StartRating } from '@/shared/ui/StarRating/StartRating';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { t } = useTranslation();
    const {
        className,
        title,
        feedbackTitle,
        onCancel,
        onAccept,
        hasFeedback,
        rate,
    } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate || 0);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(
        () => {
            setIsModalOpen(false);
            onAccept?.(starsCount, feedback);
        },
        [feedback, onAccept, starsCount],
    );

    const cancelHandle = useCallback(
        () => {
            setIsModalOpen(false);
            onCancel?.(starsCount);
        },
        [onCancel, starsCount],
    );
    console.log(starsCount);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')} />
        </>
    );

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={starsCount > 0 ? t('Спасибо за оценку!') : title} />
                <StartRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="32" max>
                        {modalContent}
                    </VStack>
                    <HStack max gap="16" justify="end">
                        <Button
                            onClick={cancelHandle}
                            theme={ButtonTheme.OUTLINE_RED}
                        >
                            {t('Закрыть')}
                        </Button>
                        <Button
                            onClick={acceptHandle}
                        >
                            {t('Отправить')}
                        </Button>
                    </HStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack gap="32" max>
                        {modalContent}
                        <Button
                            size={ButtonSize.M}
                            onClick={acceptHandle}
                            fullwidth
                        >
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
