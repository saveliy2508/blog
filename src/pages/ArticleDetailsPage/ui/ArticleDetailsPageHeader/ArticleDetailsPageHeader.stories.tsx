import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider/lib/ThemeContext';
import {ArticleDetailsPageHeader} from './ArticleDetailsPageHeader';

export default {
    title: '$/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
