import React from 'react';

import {NewsSummary} from './NewsSummary';

export default {
    title: '2.molecules/Main/NewsSummary',
    component: NewsSummary,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <NewsSummary {...args} />;

export const basic = Template.bind({});
basic.args = {
};