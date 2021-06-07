import React from 'react';
import StyledMainPageBody from "./MainPageBody.styles";
import {NewsAnalysis} from "../../2.molecules/NewsAnalysis/NewsAnalysis";
import {StockInfo} from "../../2.molecules/StockInfo/StockInfo";
import {StockPredSys} from "../../2.molecules/StockPredSys/StockPredSys";

export const MainPageBody = ({}) => {
    return (<StyledMainPageBody>
        <div className={"stock-body"}>
            <StockPredSys/>
            <StockInfo/>
        </div>
        <div className={"news-body"}>
            <NewsAnalysis/>
        </div>
    </StyledMainPageBody>);
};

MainPageBody.propTypes = {};

MainPageBody.defaultProps = {};