import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [
        (Story) => <div style={{ padding: '100px' }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Light = Template.bind({});
Light.args = {
    value: '123',
    items: [
        { content: '123123', value: '123' },
        { content: '123123', value: '1234' },
        { content: '123123', value: '1235' },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    value: '123',
    items: [
        { content: '123123', value: '123' },
        { content: '123123', value: '1234' },
        { content: '123123', value: '1235' },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    value: '123',
    items: [
        { content: '123123', value: '123' },
        { content: '123123', value: '1234' },
        { content: '123123', value: '1235' },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    value: '123',
    items: [
        { content: '123123', value: '123' },
        { content: '123123', value: '1234' },
        { content: '123123', value: '1235' },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        { content: '123123', value: '123' },
        { content: '123123', value: '1234' },
        { content: '123123', value: '1235' },
    ],
};
