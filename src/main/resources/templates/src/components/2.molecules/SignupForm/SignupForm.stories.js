import React from 'react';

import {SignupForm} from './SignupForm';

export default {
    title: '2.molecules/SignupForm',
    component: SignupForm,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <SignupForm {...args} />;

export const signupForm = Template.bind({});
signupForm.args = {};

export const signupForm2 = () => <SignupForm />