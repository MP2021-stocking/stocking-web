import React from 'react';
import StyledNewsAnalysis from "./NewsAnalysis.styles";
import {NewsSummary} from "./NewsSummary/NewsSummary";
import {Text} from "../../1.atoms/Text/Text";
import Button from "../../1.atoms/Button/Button";
import {NewsSample} from "./NewsSample/NewsSample";
import {items} from "../../1.atoms/Button/Button-data.json";
import sample_data from "./sample-news.json"

export const NewsAnalysis = ({data}) => {
    return (
        <StyledNewsAnalysis>
            <div className={"news-top"}>
                <Text text={"긍/부정 뉴스 분석"} size={"30px"} weight={600}/>
                <NewsSummary
                    name={sample_data.name}
                    num_news={sample_data.num_news}
                    num_pos={sample_data.num_pos}
                    num_neg={sample_data.num_neg}
                />
            </div>
            <div className={"news-bottom"}>
                <Button label={"정렬: 추천순"} items={items}/>
                <NewsSample positive={sample_data.positive} negative={sample_data.negative}/>
            </div>
        </StyledNewsAnalysis>
    );
};

NewsAnalysis.propTypes = {};

NewsAnalysis.defaultProps = {};