import React from 'react';

import {NewsAnalysis} from './NewsAnalysis';

export default {
    title: '2.molecules/Main/NewsAnalysis',
    component: NewsAnalysis,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <NewsAnalysis {...args} />;

export const basic = Template.bind({});
basic.args = {
};