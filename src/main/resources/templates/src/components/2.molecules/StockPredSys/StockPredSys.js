import React from 'react';
import StyledStockPredSys from "../StockPredSys/StockPredSys.styles";
import {Text} from "../../1.atoms/Text/Text";
import {StockInfoText} from "../../1.atoms/Text/StockInfoText/StockInfoText";
import Button from "../../1.atoms/Button/Button";
import {items} from "../../1.atoms/Button/Button-data.json";
import {SlideMenu} from "../../1.atoms/SlideMenu/SlideMenu";
import {SearchBar} from "../../1.atoms/InputText/InputText";
import {Shape} from "../../1.atoms/Shape/Shape";


export const StockPredSys = () => {
    return (
        <StyledStockPredSys>
            <Text text={"종목 예측 시스템"} weight={600} size={"30px"}/>
            <div className={"filter-btn"}>
                <Button label={"정렬: 추천순"} items={items}/>
            </div>
            <div className={"stock-pred-box"}>
                <SlideMenu/>
                <div className={"search-bar"}>
                    <SearchBar text={"종목 입력"}/>
                </div>
                <div className={"stock-list"}>
                    <StockInfoText name={"종목명"} current={"현재가"} prev={"전일대비"} pred={"예측"} weight={500} size={"22px"}/>
                    <Shape/>
                    <div className={"stocks"}>
                        <StockInfoText name={"삼성전자"} current={"82,500"} prev={"-2,800"} pred={0.2} weight={300}
                                       size={"16px"}/>
                        <StockInfoText name={"삼성전자"} current={"82,500"} prev={"-2,800"} pred={0.2} weight={300}
                                       size={"16px"}/>
                        <StockInfoText name={"삼성전자"} current={"82,500"} prev={"-2,800"} pred={0.2} weight={300}
                                       size={"16px"}/>
                        <StockInfoText name={"삼성전자"} current={"82,500"} prev={"-2,800"} pred={0.2} weight={300}
                                       size={"16px"}/>
                        <StockInfoText name={"삼성전자"} current={"82,500"} prev={"-2,800"} pred={0.2} weight={300}
                                       size={"16px"}/>
                        <StockInfoText name={"삼성전자"} current={"82,500"} prev={"-2,800"} pred={0.2} weight={300}
                                       size={"16px"}/>
                        <StockInfoText name={"삼성전자"} current={"82,500"} prev={"-2,800"} pred={0.2} weight={300}
                                       size={"16px"}/>
                    </div>
                </div>
            </div>
        </StyledStockPredSys>
    );
};

StockPredSys.propTypes = {};

StockPredSys.defaultProps = {};