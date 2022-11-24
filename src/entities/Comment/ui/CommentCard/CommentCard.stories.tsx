import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    comment: {
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://rebrainme.com/blog/wp-content/uploads/2020/05/haker.jpg',
        },
        text: 'hello',
        id: 'Ka7Nf4R',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    comment: {
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://rebrainme.com/blog/wp-content/uploads/2020/05/haker.jpg',
        },
        text: 'hello',
        id: 'Ka7Nf4R',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};

export const IsLoadingDark = Template.bind({});
IsLoadingDark.args = {
    isLoading: true,
};
IsLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
