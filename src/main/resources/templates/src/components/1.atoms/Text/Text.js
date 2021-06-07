import React from 'react';
import {number, string} from 'prop-types';

export const Text = ({text, weight, size, color}) => {
    return (<p style={{
        fontFamily: "S-Core", fontWeight: weight,
        fontSize: size, margin: 0, color: color}
    }>{text}</p>);
};

Text.propTypes = {
    text: string,
    weight: number,
    size: string,
    color: string
};

Text.defaultProps = {
    text: "Hello World",
    weight: 500,
    size: "30px",
    color: "#2e2a2b"
};

