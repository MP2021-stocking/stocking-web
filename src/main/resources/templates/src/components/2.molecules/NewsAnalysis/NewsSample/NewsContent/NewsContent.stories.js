import React from 'react';

import {NewsContent} from './NewsContent';

export default {
    title: '2.molecules/Main/NewsSample/NewsContent',
    component: NewsContent,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <NewsContent {...args} />;

export const basic = Template.bind({});
basic.args = {};