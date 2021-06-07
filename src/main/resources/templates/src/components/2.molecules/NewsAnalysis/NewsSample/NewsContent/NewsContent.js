import React from 'react';
import StyledNewsContent from "./NewsContent.styles";
import {Text} from "../../../../1.atoms/Text/Text";
import {string} from "prop-types";
import sample_data from "../sample-news.json";
import {MultiLineText} from "../../../../1.atoms/Text/MultiLineText/MultiLineText";

export const NewsContent = ({title, date, content}) => {
    console.log(title)
    return (
        <StyledNewsContent>
            <div className={"title"}>
                <Text text={title} weight={700} size={"18px"}/>
                <Text text={"게시일: " + date} weight={600} size={"12px"} color={"#666a6a"}/>
            </div>
            <div>
                <MultiLineText text={content} size={"14px"}/>
            </div>
        </StyledNewsContent>
    );
};

NewsContent.propTypes = {
    title: string,
    date: string,
    content: string
};

NewsContent.defaultProps = {
    title: sample_data.positive[0].title,
    date: sample_data.positive[0].date,
    content: sample_data.positive[0].content
};