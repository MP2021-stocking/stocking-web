import React from 'react';
import {number, string} from 'prop-types';

export const Text = ({text, weight, size}) => {
    return (<p style={{fontFamily: "S-Core", fontWeight: weight, fontSize: size, margin: 0}}>{text}</p>);
};

Text.propTypes = {
    text: string,
    weight: number,
    size: string,
};

Text.defaultProps = {
    text: "Hello World",
    weight: 500,
    size: "30px"
};

export const StockInfoText = ({name, current, prev, pred, size, weight}) => {
    return (<div style={{
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            alignItems: "center",
            margin: "15px 0",
            textAlign: "center"
        }}>
            <div style={{flex: 1}}><Text text={name} weight={weight} size={size}/></div>
            <div style={{flex: 1}}><Text text={current} weight={weight} size={size}/></div>
            <div style={{flex: 1}}><Text text={prev} weight={weight} size={size}/></div>
            <div style={{flex: 1}}><Text text={pred} weight={weight} size={size}/></div>
        </div>
    );
};

StockInfoText.propTypes = {
    text: string,
    weight: number,
};

StockInfoText.defaultProps = {
    text: "Hello World",
    weight: 500,
};


export const MultiLineText = ({text, weight}) => {
    return (<pre style={{fontFamily: "S-Core", fontWeight: weight}}>{text}</pre>);
};

MultiLineText.propTypes = {
    text: string,
    weight: number,
};

MultiLineText.defaultProps = {
    text: "Hello World",
    weight: 500,
};
