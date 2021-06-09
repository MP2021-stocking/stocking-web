import React, {useState} from 'react';
import StyledMainPageBody from "./MainPageBody.styles";
import {withRouter} from "react-router-dom";
import NewsAnalysis from "../../2.molecules/NewsAnalysis/NewsAnalysis";
import StockInfo from "../../2.molecules/StockInfo/StockInfo";
import StockPredSys from "../../2.molecules/StockPredSys/StockPredSys";

function MainPageBody() {
    const [stockName, setStockName] = useState("삼성전자");

    return (<StyledMainPageBody>
        <div className={"stock-body"}>
            <StockPredSys onChange={setStockName}/>
            <StockInfo name={stockName}/>
        </div>
        <div className={"news-body"}>
            <NewsAnalysis name={stockName}/>
        </div>
    </StyledMainPageBody>);
}

MainPageBody.propTypes = {};

MainPageBody.defaultProps = {};

export default withRouter(MainPageBody);