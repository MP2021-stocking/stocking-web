import React from 'react';
import {number, string} from 'prop-types';

export const Text = ({text, weight, size, color, margin}) => {
    return (<p style={{
        fontFamily: "S-Core", fontWeight: weight, margin: margin,
        fontSize: size, color: color
    }
    }>{text}</p>);
};

Text.propTypes = {
    text: string,
    weight: number,
    size: string,
    color: string,
    margin: number
};

Text.defaultProps = {
    text: "Hello World",
    weight: 500,
    size: "30px",
    color: "#2e2a2b",
    margin: "0px"
};

