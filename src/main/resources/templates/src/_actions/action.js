import {
    GET_HEADER_DATA,
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
import header_data from "./header_data.json"
import chart_data from "./chart_data.json"

let fav_stock_data = []
let allUserData = [];
let userData;

export function getHeaderData() {
    return {
        type: GET_HEADER_DATA,
        payload: header_data
    }
}

export function setUserData(data) {
    allUserData.push(data)
    userData = data
    return {
        payload: userData
    }
}

export function getUserData() {
    return {
        payload: userData
    }
}

export function auth(id) {
    let isContain = false
    for (let i = 0; i < allUserData.length; i++) {
        if (allUserData[i].id === id)
            isContain = true
    }
    return {
        payload: isContain
    }
}

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

export function getNews(name) {

    for (let i = 0; i < news_data.length; i++) {
        if (news_data[i].name === name)
            return {
                payload: news_data[i]
            }
    }
    console.log("No Data with name: " + name)
    console.log("news_data.length: " + news_data.length)
    return {
        payload: news_data[0]
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