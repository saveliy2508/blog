import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    document.documentElement.dataset.theme = theme;
    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
};
