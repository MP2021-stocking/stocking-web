import React, {useState} from 'react';
import StyledMainPageBody from "./MainPageBody.styles";
import {withRouter} from "react-router-dom";
import NewsAnalysis from "../../2.molecules/NewsAnalysis/NewsAnalysis";
import StockInfo from "../../2.molecules/StockInfo/StockInfo";
import StockPredSys from "../../2.molecules/StockPredSys/StockPredSys";
import {checkFavStock} from "../../../_actions/action";

function MainPageBody() {
    const [stockName, setStockName] = useState("삼성전자");
    const [favBtn, setFavBtn] = useState(checkFavStock(stockName));

    return (<StyledMainPageBody>
        <div className={"stock-body"}>
            <StockPredSys setStockName={setStockName} setFavBtn={setFavBtn}/>
            <StockInfo name={stockName} favBtn={favBtn} setFavBtn={setFavBtn}/>
        </div>
        <div className={"news-body"}>
            <NewsAnalysis name={stockName}/>
        </div>
    </StyledMainPageBody>);
}

MainPageBody.propTypes = {};

MainPageBody.defaultProps = {};

export default withRouter(MainPageBody);