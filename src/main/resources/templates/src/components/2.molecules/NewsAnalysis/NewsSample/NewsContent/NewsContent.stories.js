import React from 'react';

import {NewsContent} from './NewsContent';
import sample_data from "../sample-news.json";

export default {
    title: '2.molecules/Main/NewsSample/NewsContent',
    component: NewsContent,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <NewsContent {...args} />;

export const basic = Template.bind({});
basic.args = {
    title: sample_data.positive[0].title,
    date: sample_data.positive[0].date,
    content: sample_data.positive[0].content
};