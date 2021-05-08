import React from 'react';
import StyledStockInfo from "./StockInfo.styles";
import {Text} from "../../1.atoms/Text/Text";

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
                    <div className={"stock-price-main"}>
                        <div className={"current-price"}>{curPrice}</div>
                        <div className={"current-price-info"}>
                            전일대비
                            {gapPrice}
                            {gapPercent}
                        </div>
                    </div>
                    <div className={"stock-price-detail"}>
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
                    </div>
                </div>
            </div>
        </div>
    </StyledStockInfo>);
};

StockInfo.propTypes = {};

StockInfo.defaultProps = {};
