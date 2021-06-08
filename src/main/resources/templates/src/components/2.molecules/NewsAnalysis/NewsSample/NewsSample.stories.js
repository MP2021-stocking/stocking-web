import React from 'react';

import {NewsSample} from './NewsSample';

export default {
    title: '2.molecules/Main/NewsSample',
    component: NewsSample,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <NewsSample {...args} />;

export const basic = Template.bind({});
basic.args = {
};