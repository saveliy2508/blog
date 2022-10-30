import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');
    React.useEffect(() => {
        if (Math.random() > 0.5) {
            throw Error('test');
        }
    }, []);

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
