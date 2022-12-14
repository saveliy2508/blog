import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator(
        { user: { authData: {} } },
    )];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
        { user: { authData: {} } },
    )];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
    StoreDecorator(
        { user: { } },
    )];
