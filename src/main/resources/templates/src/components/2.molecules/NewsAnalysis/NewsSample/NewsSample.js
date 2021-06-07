import React from 'react';
import StyledNewsSample from "./NewsSample.styles";
import {Text} from "../../../1.atoms/Text/Text";
import posIcon from "./increase.png"
import negIcon from "./decrease.png"
import {array} from "prop-types";
import {NewsContent} from "./NewsContent/NewsContent";
import {Shape} from "../../../1.atoms/Shape/Shape";
import sample_data from "../sample-news.json"


export const NewsSample = ({positive, negative}) => {
    let pos_newses = []
    for (let i = 0; i < positive.length; i++) {
        pos_newses.push(
            <>
                <NewsContent title={positive[i].title}
                             date={positive[i].date}
                             content={positive[i].content}/>
                <Shape/>
            </>
        )
    }
    let neg_newses = []
    for (let i = 0; i < negative.length; i++) {
        neg_newses.push(
            <>
                <NewsContent title={negative[i].title}
                             date={negative[i].date}
                             content={negative[i].content}/>
                <Shape/>
            </>
        )
    }

    return (
        <StyledNewsSample>
            <div className={"positive"}>
                <div className={"div-header"}>
                    <div className={"header-left"}>
                        <img src={posIcon} alt="posIcon"/>
                        <Text text={"Positive News"}/>
                    </div>
                    <Text text={"+"}/>
                </div>
                <div className={"positive-body div-body"}>
                    {pos_newses}
                </div>
            </div>
            <div className={"negative"}>
                <div className={"div-header"}>
                    <div className={"header-left"}>
                        <img src={negIcon} alt="negIcon"/>
                        <Text text={"Negative News"}/>
                    </div>
                    <Text text={"+"}/>
                </div>
                <div className={"negative-body div-body"}>
                    {neg_newses}
                </div>
            </div>
        </StyledNewsSample>
    );
};

NewsSample.propTypes = {
    positive: array,
    negative: array
};

NewsSample.defaultProps = {
    positive: sample_data.positive,
    negative: sample_data.negative
};