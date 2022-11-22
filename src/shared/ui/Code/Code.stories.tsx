import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Light = Template.bind({});

Light.args = {
    text: 'interface CodeProps {\n'
        + '    className?: string;\n'
        + '    children: string;\n'
        + '}',
};

export const Dark = Template.bind({});

Dark.args = {
    text: 'interface CodeProps {\n'
        + '    className?: string;\n'
        + '    children: string;\n'
        + '}',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
