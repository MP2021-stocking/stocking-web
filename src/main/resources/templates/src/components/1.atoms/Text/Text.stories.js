import React from 'react';
import {Text} from './Text';
import {MultiLineText} from './MultiLineText/MultiLineText'
import {StockInfoText} from './StockInfoText/StockInfoText'


export default {
    title: '1.atoms/Text',
    component: Text,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Text {...args} />;

export const text1 = Template.bind({});
text1.args = {
    text: "Hello World",
    weight: 100,
};

export const text4 = Template.bind({});
text4.args = {
    text: "Hello World",
    weight: 400,
};

export const text7 = Template.bind({});
text7.args = {
    text: "Hello World",
    weight: 700,
};

const MultiLineTemplate = (args) => <MultiLineText {...args} />;

export const multiLineText = MultiLineTemplate.bind({});
multiLineText.args = {
    text: `Hello
World`,
    weight: 400,
};

const StockInfoTemplate = (args) => <StockInfoText {...args} />;

export const stockInfoText = StockInfoTemplate.bind({});
stockInfoText.args = {
    name: "삼성전자",
    current: "82,500",
    prev: "-2,800",
    pred: 0.2,
    weight: 200,
};

export const stockInfoTitleText = StockInfoTemplate.bind({});
stockInfoTitleText.args = {
    name: "종목명",
    current: "현재가",
    prev: "전일대비",
    pred: "예측",
    weight: 500,
};