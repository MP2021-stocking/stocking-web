import React from 'react';
import {SignupSuccessPage} from "./SignupSuccessPage";

export default {
    title: '5.pages/SignupSuccessPage',
    component: SignupSuccessPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <SignupSuccessPage {...args} />;

export const signupPage = Template.bind({});
signupPage.args = {};

export const signupPage2 = () => <SignupSuccessPage />