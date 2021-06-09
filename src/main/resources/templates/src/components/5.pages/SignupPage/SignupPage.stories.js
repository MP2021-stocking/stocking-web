import React from 'react';
import SignupPage from "./SignupPage";

export default {
    title: '5.pages/SignupPage',
    component: SignupPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <SignupPage {...args} />;

export const signupPage = Template.bind({});
signupPage.args = {};

export const signupPage2 = () => <SignupPage />