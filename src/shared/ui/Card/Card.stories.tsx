import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { CardTheme, Card } from './Card';
import { Text } from '../Text/Text';

export default {
    title: 'shared/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: <Text title="test" text="test" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="test" text="test" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const NORMAL = Template.bind({});
NORMAL.args = {
    theme: CardTheme.NORMAL,
    children: <Text title="test" text="test" />,
};

export const OUTLINED = Template.bind({});
OUTLINED.args = {
    theme: CardTheme.OUTLINED,
    children: <Text title="test" text="test" />,
};
