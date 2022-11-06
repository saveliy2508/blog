import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Modal } from './Modal';

export default {
    title: 'components/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eveniet id iste iusto laudantium pariatur porro, veritatis? Aliquam consequatur deserunt dolorum eaque, molestiae molestias officiis optio sapiente, similique veritatis voluptate!',
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eveniet id iste iusto laudantium pariatur porro, veritatis? Aliquam consequatur deserunt dolorum eaque, molestiae molestias officiis optio sapiente, similique veritatis voluptate!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
