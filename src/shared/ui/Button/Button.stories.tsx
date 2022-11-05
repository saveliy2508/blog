import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import 'app/styles/index.scss';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
Primary.decorators = [ThemeDecorator(Themes.dark)];

export const SizeS = Template.bind({});
SizeS.args = {
    children: 'Text',
    size: ButtonSize.S,
};
SizeS.decorators = [ThemeDecorator(Themes.dark)];

export const SizeM = Template.bind({});
SizeM.args = {
    children: 'Text',
    size: ButtonSize.M,
};
SizeM.decorators = [ThemeDecorator(Themes.dark)];

export const SizeL = Template.bind({});
SizeL.args = {
    children: 'Text',
    size: ButtonSize.L,
};
SizeL.decorators = [ThemeDecorator(Themes.dark)];

export const SizeXL = Template.bind({});
SizeXL.args = {
    children: 'Text',
    size: ButtonSize.XL,
};
SizeXL.decorators = [ThemeDecorator(Themes.dark)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const InvertedBackgroundTheme = Template.bind({});
InvertedBackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
InvertedBackgroundTheme.decorators = [ThemeDecorator(Themes.dark)];

export const SquareS = Template.bind({});
SquareS.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.S,
};

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
