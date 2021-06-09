import React, {useState} from 'react';
import StyledNewsSample from "./NewsSample.styles";
import Modal from 'react-modal';
import {Text} from "../../../1.atoms/Text/Text";
import {array} from "prop-types";
import {NewsContent} from "./NewsContent/NewsContent";
import {Shape} from "../../../1.atoms/Shape/Shape";
import posIcon from "./increase.png"
import negIcon from "./decrease.png"


const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '1020px',
        height: '800px',
    }
};

export const NewsSample = ({positive, negative}) => {
    const [positiveFlag, setPositiveFlag] = useState(0);
    const [negativeFlag, setNegativeFlag] = useState(0);

    const positiveBtnHandler = () => setPositiveFlag(1)
    const negativeBtnHandler = () => setNegativeFlag(1)

    let pos_newses = []
    for (let i = 0; i < positive.length; i++) {
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
    for (let i = 0; i < negative.length; i++) {
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
            <Modal
                isOpen={positiveFlag}
                style={modalStyles}
                onRequestClose={() => setPositiveFlag(0)}
                shouldCloseOnOverlayClick={true}
            >
                {pos_newses}
            </Modal>
            <Modal
                isOpen={negativeFlag}
                style={modalStyles}
                onRequestClose={() => setNegativeFlag(0)}
                shouldCloseOnOverlayClick={true}
            >
                {neg_newses}
            </Modal>
            <div className={"positive"}>
                <div className={"div-header"}>
                    <div className={"header-left"}>
                        <img src={posIcon} alt="posIcon"/>
                        <Text text={"Positive News"}/>
                    </div>
                    <Text className={"plus-btn"} text={"+"} onClick={positiveBtnHandler}/>
                </div>
                <div className={"positive-body div-body"}>
                    {pos_newses.slice(undefined, 2)}
                </div>
            </div>
            <div className={"negative"}>
                <div className={"div-header"}>
                    <div className={"header-left"}>
                        <img src={negIcon} alt="negIcon"/>
                        <Text text={"Negative News"}/>
                    </div>
                    <Text className={"plus-btn"} text={"+"} onClick={negativeBtnHandler}/>
                </div>
                <div className={"negative-body div-body"}>
                    {neg_newses.slice(undefined, 2)}
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