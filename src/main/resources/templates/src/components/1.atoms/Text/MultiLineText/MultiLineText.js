import {number, string} from "prop-types";
import React from "react";

export const MultiLineText = ({text, weight}) => {
    return (<pre style={{
        fontFamily: "S-Core",
        fontWeight: weight,
        whiteSpace: "pre-wrap",
        textAlign: "justify",
        textJustify: "inter-word"
    }}>{text}</pre>);
};

MultiLineText.propTypes = {
    text: string,
    weight: number,
};

MultiLineText.defaultProps = {
    text: "Hello World",
    weight: 500,
};
