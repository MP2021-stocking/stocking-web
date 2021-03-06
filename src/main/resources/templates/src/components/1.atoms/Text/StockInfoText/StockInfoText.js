import {number, string} from "prop-types";
import React from "react";
import {Text} from "../Text";
import StyledStockInfoText from "./StockInfoText.styles";
import {withRouter} from "react-router-dom";
import {checkFavStock} from "../../../../_actions/action";

function StockInfoText({name, open, change, pred, size, weight, setStockName, setFavBtn}) {
    const setStockInfo = () =>{
        if (name !== "종목명") {
            setStockName(name)
        }
        if (checkFavStock(name).payload){
            setFavBtn(1)
        } else {
            setFavBtn(0)
        }
    }

    function format_currency(text) {
        if (typeof (text) === "number") {
            return Intl.NumberFormat().format(text)
        } else {
            return text
        }
    }

    function pred_color(text) {
        if (typeof (text) === "number") {
            return (text >= 0) ? "#b3142f" : "#0065b1";
        } else {
            return "black"
        }
    }

    return (<StyledStockInfoText onClick={setStockInfo}>
            <div><Text text={name} weight={weight} size={size}/></div>
            <div><Text text={format_currency(open)} weight={weight} size={size}/></div>
            <div><Text text={format_currency(change)} weight={weight} size={size}/></div>
            <div><Text text={pred} weight={weight} size={size} color={pred_color(pred)}/></div>
        </StyledStockInfoText>
    );
}

StockInfoText.propTypes = {
    text: string,
    weight: number,
};

StockInfoText.defaultProps = {
    text: "Hello World",
    weight: 500,
};

export default withRouter(StockInfoText);