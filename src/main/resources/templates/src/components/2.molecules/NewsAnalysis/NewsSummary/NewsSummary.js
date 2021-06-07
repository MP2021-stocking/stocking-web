import React from 'react';
import StyledNewsSummary from "./NewsSummary.styles";
import {Text} from "../../../1.atoms/Text/Text";
import {number, string} from "prop-types";
import analIcon from "./market-analysis.png"

export const NewsSummary = ({name, num_news, num_pos, num_neg}) => {
    return (
        <StyledNewsSummary>
            <img src={analIcon} alt="analIcon"/>
            <Text text={name} size={"28px"} color={"#12af67"} weight={700} margin={"3px"}/>
            <Text text={"에 대한 검색 결과: 총 " + num_news + "개의 뉴스 - "} size={"24px"} margin={"3px"}/>
            <Text text={" Positive " + num_pos + "개"} size={"24px"} color={"#b3142f"} margin={"3px"}/>
            <Text text={"/"} size={"24px"} margin={"3px"}/>
            <Text text={"Negative " + num_neg + "개"} size={"24px"} color={"#0065b1"} margin={"3px"}/>
        </StyledNewsSummary>
    );
};

NewsSummary.propTypes = {
    name: string,
    num_news: number,
    num_pos: number,
    num_neg: number
};

NewsSummary.defaultProps = {
    name: "삼성전자",
    num_news: 16,
    num_pos: 10,
    num_neg: 6
};