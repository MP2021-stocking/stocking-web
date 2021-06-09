import React from 'react';
import StyledNewsSample from "./NewsSample.styles";
import {Text} from "../../../1.atoms/Text/Text";
import {array} from "prop-types";
import {NewsContent} from "./NewsContent/NewsContent";
import {Shape} from "../../../1.atoms/Shape/Shape";
import posIcon from "./increase.png"
import negIcon from "./decrease.png"


export const NewsSample = ({positive, negative}) => {
    let pos_newses = []
    let numSamplePos = Math.min(positive.length, 2)
    let numSampleNeg = Math.min(negative.length, 2)
    for (let i = 0; i < numSamplePos; i++) {
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
    for (let i = 0; i < numSampleNeg; i++) {
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
                    <Text className={"plus-btn"} text={"+"}/>
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
                    <Text className={"plus-btn"} text={"+"}/>
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

NewsSample.defaultProps = {};