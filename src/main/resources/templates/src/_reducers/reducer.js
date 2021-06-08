import {
    GET_ALL_NEWS,
    GET_ALL_STOCK_INFO,
    GET_STOCK_INFO
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_ALL_STOCK_INFO:
            return { ...state, allStockInfo: action.payload }
            break;
        case GET_ALL_NEWS:
            return { ...state, allNews: action.payload }
            break;
        case GET_STOCK_INFO:
            return { ...state, stockInfo: action.payload }
            break;
        default:
            return state;
    }
}