import React from 'react';

import {MainPageBody} from './MainPageBody';

export default {
    title: '3.organisms/MainPageBody',
    component: MainPageBody,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <MainPageBody {...args} />;

export const basic = Template.bind({});
basic.args = {
};
