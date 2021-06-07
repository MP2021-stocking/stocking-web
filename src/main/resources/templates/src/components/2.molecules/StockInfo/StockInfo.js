import React from 'react';
import StyledStockInfo from "./StockInfo.styles";
import {Text} from "../../1.atoms/Text/Text";
import {StockPriceMain} from "../../1.atoms/Text/StockPriceMain/StockPriceMain";
import {StockPriceDetail} from "../../1.atoms/Text/StockPriceDetail/StockPriceDetail";

export const StockInfo = () => {
    let stockName = "삼성전자"
    let prevPrice = 85300
    let curPrice = 82500
    let openPrice = 82800
    let highPrice = 83400
    let lowPrice = 82000
    let gapPrice = -2800
    let gapPercent = -3.28
    let tradeAmount = 36715024
    let tradeVolume = 3026814

    return (<StyledStockInfo>
        <Text text={"시세 요약표"} weight={600} size={"30px"}/>
        <div className={"stock-info-table"}>
            <div className={"stock-name"}>{stockName}</div>
            <div className={"stock-price-table"}>
                <div className={"table-top"}>
                    <StockPriceMain
                        curPrice={curPrice} gapPrice={gapPrice} gapPercent={gapPercent}/>
                    <StockPriceDetail
                        prevPrice={prevPrice} highPrice={highPrice} tradeAmount={tradeAmount}
                        openPrice={openPrice} lowPrice={lowPrice} tradeVolume={tradeVolume}/>
                </div>
            </div>
            <div className={"chart"}>
            </div>
        </div>
    </StyledStockInfo>);
};

StockInfo.propTypes = {};

StockInfo.defaultProps = {};
