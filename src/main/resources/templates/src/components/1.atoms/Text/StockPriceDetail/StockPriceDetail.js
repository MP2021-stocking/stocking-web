import React from "react";
import {StyledStockPriceDetail} from "./StockPriceDetail.styles";

export const StockPriceDetail = ({
                                     prevPrice, highPrice, tradeAmount,
                                     openPrice, lowPrice, tradeVolume
                                 }) => {
    return (<StyledStockPriceDetail>
        <div className={"detail"}>
            <div className={"prev-price"}>
                전일 {prevPrice}
            </div>
            <div className={"high-price"}>
                고가 {highPrice}
            </div>
            <div className={"trade-volume"}>
                거래량 {tradeAmount}
            </div>
        </div>
        <div className={"detail"}>
            <div className={"prev-price"}>
                시가 {openPrice}
            </div>
            <div className={"high-price"}>
                저가 {lowPrice}
            </div>
            <div className={"trade-volume"}>
                거래대금 {tradeVolume}
            </div>
        </div>
    </StyledStockPriceDetail>);
};

StockPriceDetail.propTypes = {};

StockPriceDetail.defaultProps = {};
