import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import StarIcon from '@/shared/assets/icons/star-icon.svg';
import { classNames } from '@/shared/lib';
import cls from './StartRating.module.scss';
import { Icon } from '../Icon/Icon';

interface StartRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StartRating = memo((props: StartRatingProps) => {
    const { t } = useTranslation();
    const {
        className,
        onSelect,
        size = 30,
        selectedStars = 0,
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars || 0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.StartRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [currentStarsCount >= starNumber ? cls.hovered : cls.normal],
                    )}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
