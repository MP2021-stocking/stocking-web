import React, {useState} from 'react';
import StyledStockPredSys from "../StockPredSys/StockPredSys.styles";
import {withRouter} from "react-router-dom";
import {Text} from "../../1.atoms/Text/Text";
import StockInfoText from "../../1.atoms/Text/StockInfoText/StockInfoText";
import Button from "../../1.atoms/Button/Button";
import {SlideMenu} from "../../1.atoms/SlideMenu/SlideMenu";
import {SearchBar} from "../../1.atoms/InputText/InputText";
import {Shape} from "../../1.atoms/Shape/Shape";
import {items} from "../../1.atoms/Button/Button-data.json";
import {getAllStock} from "../../../_actions/action";


function StockPredSys({onChange}) {
    let stockData = getAllStock().payload;

    function getStockInfos(data, onChange) {
        let result = []
        for (let i = 0; i < data.length; i++) {
            result.push(<StockInfoText name={data[i].name} open={data[i].open} change={data[i].change}
                                       pred={data[i].pred} weight={400} size={"16px"} onChange={onChange}/>)
        }
        return result;
    }

    const [stockInfos, setStockInfos] = useState(getStockInfos(stockData, onChange));

    return (
        <StyledStockPredSys>
            <Text text={"종목 예측 시스템"} weight={600} size={"30px"}/>
            <div className={"filter-btn"}>
                <Button label={3} items={items} data={stockData} setStockInfos={setStockInfos}/>
            </div>
            <div className={"stock-pred-box"}>
                <SlideMenu/>
                <div className={"search-bar"}>
                    <SearchBar text={"종목 입력"}/>
                </div>
                <div className={"stock-list"}>
                    <StockInfoText name={"종목명"} open={"현재가"} change={"전일대비"} pred={"추천"} weight={500} size={"22px"}/>
                    <Shape/>
                    <div className={"stocks"}>
                        {stockInfos}
                    </div>
                </div>
            </div>
        </StyledStockPredSys>
    );
}

StockPredSys.propTypes = {};

StockPredSys.defaultProps = {};

export default withRouter(StockPredSys);