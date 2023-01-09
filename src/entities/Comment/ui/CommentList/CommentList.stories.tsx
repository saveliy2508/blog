import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const comments = [{
    user: {
        id: '2',
        username: 'admin',
        avatar: 'https://rebrainme.com/blog/wp-content/uploads/2020/05/haker.jpg',
    },
    text: 'hello',
    id: 'Ka7Nf4R',
}, {
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://rebrainme.com/blog/wp-content/uploads/2020/05/haker.jpg',
    },
    text: 'yoyo',
    id: 'Ka7Nf422R',
}, {
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://rebrainme.com/blog/wp-content/uploads/2020/05/haker.jpg',
    },
    text: 'how are you?',
    id: 'Ka7Nf1234R',
}];

export const Light = Template.bind({});
Light.args = {
    comments,
};

export const Dark = Template.bind({});
Dark.args = {
    comments,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};

export const NoComments = Template.bind({});
NoComments.args = {
    comments: [],
};
