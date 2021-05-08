import React from "react";
import {StyledStockPriceDetail} from "./StockPriceDetail.styles";

export const StockPriceDetail = ({
                                     prevPrice, highPrice, tradeAmount,
                                     openPrice, lowPrice, tradeVolume
                                 }) => {
    let highColor = (highPrice >= prevPrice)
    let openColor = (openPrice >= prevPrice)
    let lowColor = (lowPrice >= prevPrice)

    return (<StyledStockPriceDetail highColor={highColor}
                                    openColor={openColor}
                                    lowColor={lowColor}>

        <div className={"detail"}>
            <div className={"content"}>
                전일 <div className={"prev-price"}>{prevPrice}</div>
            </div>
            <div className={"content"}>
                고가 <div className={"high-price"}>{highPrice}</div>
            </div>
            <div className={"content"}>
                거래량 <div className={"trade-amount"}>{tradeAmount} </div>
            </div>
        </div>
        <div className={"detail"}>
            <div className={"content"}>
                시가 <div className={"open-price"}>{openPrice}</div>
            </div>
            <div className={"content"}>
                저가 <div className={"low-price"}>{lowPrice}</div>
            </div>
            <div className={"content"}>
                거래대금 <div className={"trade-volume"}>{tradeVolume}</div>
            </div>
        </div>
    </StyledStockPriceDetail>);
};

StockPriceDetail.propTypes = {};

StockPriceDetail.defaultProps = {};
