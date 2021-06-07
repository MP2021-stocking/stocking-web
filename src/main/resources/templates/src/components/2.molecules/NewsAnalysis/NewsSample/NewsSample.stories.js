import React from 'react';

import {NewsSample} from './NewsSample';
import sample_data from "./sample-news.json";

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
    positive: sample_data.positive,
    negative: sample_data.negative,
};