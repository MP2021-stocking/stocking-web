import {number, string} from "prop-types";
import React from "react";
import {Text} from "../Text";

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