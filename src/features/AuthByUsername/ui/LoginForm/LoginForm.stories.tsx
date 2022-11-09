import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ login: { username: 'saveliy', password: '123' } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({ login: { username: 'saveliy', password: '123' } }), ThemeDecorator(Theme.DARK)];

export const LightError = Template.bind({});
LightError.args = {};
LightError.decorators = [StoreDecorator({ login: { username: 'saveliy', password: '123', error: 'Нет такого пользователя' } })];

export const DarkError = Template.bind({});
DarkError.args = {};
DarkError.decorators = [StoreDecorator({ login: { username: 'saveliy', password: '123', error: 'Нет такого пользователя' } }), ThemeDecorator(Theme.DARK)];
