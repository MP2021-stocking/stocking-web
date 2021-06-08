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
    stockData = stockData.sort((a, b) => (a.pred < b.pred) ? 1 : -1)

    let stock_infos = []
    for (let i = 0; i < stockData.length; i++) {
        stock_infos.push(<StockInfoText name={stockData[i].name} open={stockData[i].open} change={stockData[i].change}
                                        pred={stockData[i].pred} weight={400} size={"16px"} onChange={onChange}/>)
    }

    const [stockInfos, setStockInfos] = useState(stock_infos);
    const [filter, setFilter] = useState("");

    const onFilterHandler = (event) => setFilter(event.currentTarget.value)
    const searchKeyHandler = (event) => {
        if (event.key === "Enter") {
            console.log("enter Key!")
            applyFilter()
        }
    }
    const applyFilter = () => {
        if (filter !== "") {
            let filtered_stock_infos = []
            for (let i = 0; i < stockData.length; i++) {
                if (stockData[i].name.includes(filter)) {
                    filtered_stock_infos.push(<StockInfoText name={stockData[i].name} open={stockData[i].open}
                                                             change={stockData[i].change}
                                                             pred={stockData[i].pred} weight={400} size={"16px"}
                                                             onChange={onChange}/>)
                }
            }
            setStockInfos(filtered_stock_infos)
        } else {
            setStockInfos(stock_infos)
        }
    }

    return (
        <StyledStockPredSys>
            <Text text={"종목 예측 시스템"} weight={600} size={"30px"}/>
            <div className={"filter-btn"}>
                <Button label={3} items={items} data={stockData} setStockInfos={setStockInfos} onChange={onChange}/>
            </div>
            <div className={"stock-pred-box"}>
                <SlideMenu/>
                <div className={"search-bar"}>
                    <SearchBar value={filter} text={"종목 입력"} onKeyPress={searchKeyHandler} onChange={onFilterHandler}
                               onClick={applyFilter}/>
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