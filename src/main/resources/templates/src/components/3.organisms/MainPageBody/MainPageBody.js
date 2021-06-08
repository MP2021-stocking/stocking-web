import React from 'react';
import StyledMainPageBody from "./MainPageBody.styles";
import {withRouter} from "react-router-dom";
import NewsAnalysis from "../../2.molecules/NewsAnalysis/NewsAnalysis";
import StockInfo from "../../2.molecules/StockInfo/StockInfo";
import StockPredSys from "../../2.molecules/StockPredSys/StockPredSys";

function MainPageBody() {
    return (<StyledMainPageBody>
        <div className={"stock-body"}>
            <StockPredSys/>
            <StockInfo name={"삼성전자"}/>
        </div>
        <div className={"news-body"}>
            <NewsAnalysis/>
        </div>
    </StyledMainPageBody>);
}

MainPageBody.propTypes = {};

MainPageBody.defaultProps = {};

export default withRouter(MainPageBody);