import React from 'react';

import {StockPredSys} from './StockPredSys';

export default {
    title: '2.molecules/Main/StockPredSys',
    component: StockPredSys,
};

const Template = (args) => <StockPredSys {...args} />;

export const stockPredSys = Template.bind({});
stockPredSys.args = {
};

export const stockPredSys2 = () => <StockPredSys />