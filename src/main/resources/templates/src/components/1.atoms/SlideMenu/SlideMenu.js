import React from 'react';
import StyledSlideMenu from "./SlideMenu.styles";

export const SlideMenu = ({flag, handler}) => {
    return (
        <StyledSlideMenu>
            <input type={"radio"} id={"r1"} name={"t"} onClick={handler} checked={(flag === 0)}/>
            <label className={"r1"} htmlFor={"r1"}>전체종목</label>
            <input type={"radio"} id={"r2"} name={"t"} onClick={handler} checked={(flag === 1)}/>
            <label className={"r2"} htmlFor={"r2"}>관심종목</label>
        </StyledSlideMenu>);
}

SlideMenu.propTypes = {};

SlideMenu.defaultProps = {};
