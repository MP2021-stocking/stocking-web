import React from "react";
import {StyledStockPriceMain} from "./StockPriceMain.styles";


export const StockPriceMain = ({curPrice, gapPrice, gapPercent}) => {
    return (<StyledStockPriceMain>
        <div className={"current-price"}>{curPrice}</div>
        <div className={"current-price-info"}>
            전일대비
            {gapPrice}
            {gapPercent}
        </div>
    </StyledStockPriceMain>);
};

StockPriceMain.propTypes = {};

StockPriceMain.defaultProps = {};
