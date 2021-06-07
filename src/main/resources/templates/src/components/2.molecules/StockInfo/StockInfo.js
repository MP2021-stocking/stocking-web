import React from 'react';
import StyledStockInfo from "./StockInfo.styles";
import {Text} from "../../1.atoms/Text/Text";
import {StockPriceMain} from "../../1.atoms/Text/StockPriceMain/StockPriceMain";
import {StockPriceDetail} from "../../1.atoms/Text/StockPriceDetail/StockPriceDetail";
import sample_data from "./sample-stock-data.json"
import {StockChart} from "./StockChart/StockChart";

export const StockInfo = () => {
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
            <div className={"stock-name"}>{sample_data.name}</div>
            <div className={"stock-price-table"}>
                <div className={"table-top"}>
                    <StockPriceMain
                        curPrice={format_number(sample_data.cur)}
                        gapPrice={format_number(sample_data.change)}
                        gapPercent={sample_data.change_per}/>
                    <StockPriceDetail
                        prevPrice={format_number(sample_data.prev)}
                        highPrice={format_number(sample_data.high)}
                        tradeAmount={format_number(sample_data.tradeAmount)}
                        openPrice={format_number(sample_data.open)}
                        lowPrice={format_number(sample_data.low)}
                        tradeVolume={format_number(sample_data.tradeVolume)}/>
                </div>
            </div>
            <div className={"chart"}>
                <StockChart />
            </div>
        </div>
    </StyledStockInfo>);
};

StockInfo.propTypes = {};

StockInfo.defaultProps = {};
