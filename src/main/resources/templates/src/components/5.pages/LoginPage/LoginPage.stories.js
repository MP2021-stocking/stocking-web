import React from 'react';

import {LoginPage} from './LoginPage';

export default {
    title: '5.pages/LoginPage',
    component: LoginPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <LoginPage {...args} />;

export const loginPage = Template.bind({});
loginPage.args = {};

export const loginPage2 = () => <LoginPage />