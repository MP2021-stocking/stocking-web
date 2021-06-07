import React from 'react';
import {StockChart} from './StockChart';

export default {
    title: '2.molecules/Main/StockInfo/StockChart',
    component: StockChart,
};

const Template = (args) => <StockChart {...args} />;

export const basic = Template.bind({});
basic.args = {};