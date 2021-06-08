import React from 'react';
import StyledStockInfo from "./StockInfo.styles";
import {withRouter} from "react-router-dom";
import {Text} from "../../1.atoms/Text/Text";
import {StockPriceMain} from "../../1.atoms/Text/StockPriceMain/StockPriceMain";
import {StockPriceDetail} from "../../1.atoms/Text/StockPriceDetail/StockPriceDetail";
import StockChart from "./StockChart/StockChart";
import {getStockInfo} from "../../../_actions/action";

function StockInfo() {
    let stockData = getStockInfo().payload;

    function format_number(text) {
        if (typeof (text) === "number") {
            return Intl.NumberFormat().format(text)
        } else {
            return text
        }
    }

    return (<StyledStockInfo>
        <Text text={"시세 요약표"} weight={600} size={"30px"}/>
        <div className={"stock-info-table"}>
            <div className={"stock-name"}>{stockData.name}</div>
            <div className={"stock-price-table"}>
                <div className={"table-top"}>
                    <StockPriceMain
                        curPrice={format_number(stockData.cur)}
                        gapPrice={format_number(stockData.change)}
                        gapPercent={stockData.change_per}/>
                    <StockPriceDetail
                        prevPrice={format_number(stockData.prev)}
                        highPrice={format_number(stockData.high)}
                        tradeAmount={format_number(stockData.tradeAmount)}
                        openPrice={format_number(stockData.open)}
                        lowPrice={format_number(stockData.low)}
                        tradeVolume={format_number(stockData.tradeVolume)}/>
                </div>
            </div>
            <div className={"chart"}>
                <StockChart/>
            </div>
        </div>
    </StyledStockInfo>);
}

StockInfo.propTypes = {};

StockInfo.defaultProps = {};

export default withRouter(StockInfo);