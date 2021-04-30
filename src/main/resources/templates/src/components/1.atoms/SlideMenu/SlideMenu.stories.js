import React from 'react';
import {SlideMenu} from './SlideMenu';

export default {
    title: '1.atoms/SlideMenu',
    component: SlideMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <SlideMenu {...args} />;

export const slideMenu = Template.bind({});
slideMenu.args = {};