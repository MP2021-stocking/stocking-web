import {
    GET_ALL_STOCK_INFO, GET_ALL_NEWS, GET_STOCK_INFO, GET_CHART_DATA
} from './types';

import news_data from "./news_data.json"
import stock_data from "./stock_data.json"
import chart_data from "./chart_data.json"

export function getAllStock() {
    return {
        type: GET_ALL_STOCK_INFO,
        payload: stock_data
    }
}

export function getAllNews() {
    return {
        type: GET_ALL_NEWS,
        payload: news_data
    }
}

export function getStockInfo(name) {
    console.log("Hell?")
    for (let i = 0; i < stock_data.length; i++) {
        if (stock_data[i].name === name) {
            return {
                type: GET_STOCK_INFO,
                payload: stock_data[i]
            }
        }
    }
}

export function getChartData(name) {
    return {
        type: GET_CHART_DATA,
        payload: chart_data
    }
}