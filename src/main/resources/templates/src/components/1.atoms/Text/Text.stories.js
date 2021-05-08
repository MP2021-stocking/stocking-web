import React from 'react';
import {Text} from './Text';
import {MultiLineText} from './MultiLineText/MultiLineText'
import {StockInfoText} from './StockInfoText/StockInfoText'
import {StockPriceMain} from "./StockPriceMain/StockPriceMain";
import {StockPriceDetail} from "./StockPriceDetail/StockPriceDetail";


export default {
    title: '1.atoms/Text',
    component: Text,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Text {...args} />;

export const text400 = Template.bind({});
text400.args = {
    text: "Hello World",
    weight: 400,
};

export const text700 = Template.bind({});
text700.args = {
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

export const stockPriceMain = StockPriceMain.bind({})
stockPriceMain.args = {
    curPrice: 12345,
    gapPrice: 1234,
    gapPercent: 1.2
}

export const stockPriceDetail = StockPriceDetail.bind({})
stockPriceDetail.args = {
    prevPrice: 12345,
    highPrice: 123456,
    tradeAmount: 1234567,
       openPrice: 12345,
    lowPrice: 123,
    tradeVolume: 12345678
}