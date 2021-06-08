import {
    GET_ALL_STOCK_INFO,
    GET_ALL_NEWS,
    GET_STOCK_INFO,
    GET_CHART_DATA,
    GET_FAV_STOCK_INFO,
    CHECK_FAV_STOCK_INFO,
    ADD_FAV_STOCK_INFO,
    DELETE_FAV_STOCK_INFO,
} from './types';

import news_data from "./news_data.json"
import stock_data from "./stock_data.json"
import chart_data from "./chart_data.json"

let fav_stock_data = []

export function getAllStock() {
    return {
        type: GET_ALL_STOCK_INFO,
        payload: stock_data
    }
}

export function getFavStock() {
    return {
        type: GET_FAV_STOCK_INFO,
        payload: fav_stock_data
    }
}

export function checkFavStock(name) {
    let isContain = 0;
    for (let i = 0; i < fav_stock_data.length; i++) {
        if (fav_stock_data[i].name === name)
            isContain = 1
    }
    return {
        type: CHECK_FAV_STOCK_INFO,
        payload: isContain
    }
}


export function addFavStock(data) {
    let isContain = 0;
    for (let i = 0; i < fav_stock_data.length; i++) {
        if (fav_stock_data[i].name === data.name)
            isContain = 1
    }
    if (isContain === 0)
        fav_stock_data.push(data)
    return {
        type: ADD_FAV_STOCK_INFO,
        payload: fav_stock_data
    }
}

export function deleteFavStock(data) {
    for (let i = 0; i < fav_stock_data.length; i++) {
        if (fav_stock_data[i].name === data.name)
            fav_stock_data.splice(i, 1)
    }
    return {
        type: DELETE_FAV_STOCK_INFO,
        payload: fav_stock_data
    }
}

export function getAllNews() {
    return {
        type: GET_ALL_NEWS,
        payload: news_data
    }
}

export function getStockInfo(name) {
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
        payload: chart_data[name]
    }
}