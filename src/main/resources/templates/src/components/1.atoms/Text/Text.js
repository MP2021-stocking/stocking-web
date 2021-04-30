import React from 'react';
import {number, string} from 'prop-types';

export const Text = ({text, weight, color, size}) => {
    return (<p style={{fontFamily:"S-Core", fontWeight: weight, color: color, fontSize : size}}>{text}</p>);
};

Text.propTypes = {
    text: string,
    weight: number,
    color : string,
    size : string,
};

Text.defaultProps = {
    text: "Hello World",
    weight: 500,
    color : "#000000",
    size : "25px",

};

export const MultiLineText = ({text, weight}) => {
    return (<pre style={{fontFamily:"S-Core", fontWeight: weight}}>{text}</pre>);
};

MultiLineText.propTypes = {
    text: string,
    weight: number,
};

MultiLineText.defaultProps = {
    text: "Hello World",
    weight: 500,
};
