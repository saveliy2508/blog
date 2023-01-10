import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StartRating } from './StartRating';

export default {
    title: '$/StartRating',
    component: StartRating,
} as ComponentMeta<typeof StartRating>;

const Template: ComponentStory<typeof StartRating> = (args) => <StartRating {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
