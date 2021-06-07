import React from 'react';
import {StockInfo} from './StockInfo';

export default {
    title: '2.molecules/Main/StockInfo',
    component: StockInfo,
};

const Template = (args) => <StockInfo {...args} />;

export const primaryStockInfo = Template.bind({});
primaryStockInfo.args = {};