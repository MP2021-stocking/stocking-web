import React from 'react';

import LoginForm from './LoginForm';

export default {
    title: '2.molecules/Auth/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <LoginForm {...args} />;

export const loginForm = Template.bind({});
loginForm.args = {};

export const loginForm2 = () => <LoginForm />