import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Савелий',
        lastname: 'Вольский',
        age: 23,
        currency: Currency.USD,
        country: Country.RUSSIA,
        city: 'Saint-Petersburg',
        username: 'admin',
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
