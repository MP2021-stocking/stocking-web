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
            fontFamily: "S-Core",
            fontWeight: weight,
            textAlign:"center",
            margin: "15px 0",
        }}>
            <div style={{flex: 1, justifyContent:"center"}}> <Text text={name} weight={weight} size={size} /> </div>
            <div style={{flex: 1, justifyContent:"center"}}> <Text text={current} weight={weight} size={size} /></div>
            <div style={{flex: 1, justifyContent:"center"}}> <Text text={prev} weight={weight} size={size} /></div>
            <div style={{flex: 1, justifyContent:"center"}}> <Text text={pred} weight={weight} size={size} /></div>
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
