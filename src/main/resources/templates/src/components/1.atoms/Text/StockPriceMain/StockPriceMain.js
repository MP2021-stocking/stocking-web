import React from "react";
import {StyledStockPriceMain} from "./StockPriceMain.styles";


export const StockPriceMain = ({curPrice, gapPrice, gapPercent}) => {
    let colorFlag = (gapPrice >=0)
    return (<StyledStockPriceMain colorFlag={colorFlag}>
        <div className={"current-price"}>
            {curPrice}
        </div>
        <div className={"current-price-info"}>
            <div className="compare">전일대비</div>
            <div className="gap-price">{gapPrice}</div>
            <div className="gap-percent">{gapPercent}%</div>
        </div>
    </StyledStockPriceMain>);
};

StockPriceMain.propTypes = {};

StockPriceMain.defaultProps = {};
