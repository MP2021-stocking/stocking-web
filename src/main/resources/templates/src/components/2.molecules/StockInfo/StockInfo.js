import React from 'react';
import StyledStockInfo from "./StockInfo.styles";
import {withRouter} from "react-router-dom";
import {Text} from "../../1.atoms/Text/Text";
import {StockPriceMain} from "../../1.atoms/Text/StockPriceMain/StockPriceMain";
import {StockPriceDetail} from "../../1.atoms/Text/StockPriceDetail/StockPriceDetail";
import StockChart from "./StockChart/StockChart";
import {getStockInfo, addFavStock, deleteFavStock, checkFavStock} from "../../../_actions/action";
import Button from "../../1.atoms/Button/Button";

function StockInfo({name}) {
    let stockData = getStockInfo(name).payload;
    let favBtn = initFavBtn(name);

    function initFavBtn(name) {
        if (checkFavStock(name).payload === 0) {
            return <Button onClick={addFavorite} label={"Add Favorite"} variant={"secondary"}/>
        } else {
            return <Button onClick={deleteFavorite} label={"Delete Favorite"} variant={"secondary"}/>
        }
    }

    function format_number(text) {
        if (typeof (text) === "number") {
            return Intl.NumberFormat().format(text)
        } else {
            return text
        }
    }

    function addFavorite() {
        console.log(addFavStock(stockData).payload)
        favBtn = initFavBtn(name);
    }

    function deleteFavorite() {
        console.log(deleteFavStock(stockData).payload)
        favBtn = initFavBtn(name);
    }

    let gapPercent = Math.round(stockData.change / stockData.open * 10000) / 100;

    return (<StyledStockInfo>
        <Text text={"시세 요약표"} weight={600} size={"30px"}/>
        <div className={"stock-info-table"}>
            <div className="info-top">
                <div className={"stock-name"}>
                    {stockData.name}
                </div>
                <div className={"add-favorite"}>
                    {favBtn}
                </div>
            </div>
            <div className={"stock-price-table"}>
                <div className={"table-top"}>
                    <StockPriceMain
                        curPrice={format_number(stockData.close)}
                        gapPrice={format_number(stockData.change)}
                        gapPercent={gapPercent}/>
                    <StockPriceDetail
                        prevPrice={format_number(stockData.prev)}
                        highPrice={format_number(stockData.high)}
                        tradeAmount={format_number(stockData.volume)}
                        openPrice={format_number(stockData.open)}
                        lowPrice={format_number(stockData.low)}
                        tradeVolume={format_number(parseInt(stockData.volume * stockData.open / 1000000))}/>
                </div>
            </div>
            <div className={"chart"}>
                <StockChart name={name}/>
            </div>
        </div>
    </StyledStockInfo>);
}

StockInfo.propTypes = {};

StockInfo.defaultProps = {};

export default withRouter(StockInfo);