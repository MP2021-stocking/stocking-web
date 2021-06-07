import React from 'react';

import {SignupSuccess} from './SignupSuccess';

export default {
    title: '2.molecules/Auth/SignupSuccess',
    component: SignupSuccess,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <SignupSuccess {...args} />;

export const signupSuccess = Template.bind({});
signupSuccess.args = {};