import React from 'react';
import StyledNewsAnalysis from "./NewsAnalysis.styles";
import {withRouter} from "react-router-dom";
import {Text} from "../../1.atoms/Text/Text";
import Button from "../../1.atoms/Button/Button";
import {items} from "../../1.atoms/Button/Button-data.json";
import {NewsSample} from "./NewsSample/NewsSample";
import {NewsSummary} from "./NewsSummary/NewsSummary";
import {getAllNews} from "../../../_actions/action";

function NewsAnalysis() {
    let newsData = getAllNews().payload;

    return (
        <StyledNewsAnalysis>
            <div className={"news-top"}>
                <Text text={"긍/부정 뉴스 분석"} size={"30px"} weight={600}/>
                <NewsSummary
                    name={newsData.name}
                    num_news={newsData.positive.length + newsData.negative.length}
                    num_pos={newsData.positive.length}
                    num_neg={newsData.negative.length}
                />
            </div>
            <div className={"news-bottom"}>
                <Button label={"정렬: 추천순"} items={items}/>
                <NewsSample
                    positive={newsData.positive}
                    negative={newsData.negative}/>
            </div>
        </StyledNewsAnalysis>
    );
}

NewsAnalysis.propTypes = {};

NewsAnalysis.defaultProps = {};

export default withRouter(NewsAnalysis);