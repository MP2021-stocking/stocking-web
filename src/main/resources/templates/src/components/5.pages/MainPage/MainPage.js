import React from 'react';
import StyledMainPage from "./MainPage.styles";
import {withRouter} from "react-router-dom";
import Header from "../../3.organisms/Header/Header"
import {Footer} from "../../3.organisms/Footer/Footer";
import MainPageBody from "../../3.organisms/MainPageBody/MainPageBody";
import {getHeaderData} from "../../../_actions/action";

function MainPage() {
    return (<>
        <StyledMainPage/>
        <Header logoLink={'/main'}
                items1={getHeaderData().payload.items_main_left}
                items2={getHeaderData().payload.items_main_right}/>
        <div className={"body"}>
            <MainPageBody/>
        </div>
        <Footer/>
    </>);
}

MainPage.propTypes = {};

MainPage.defaultProps = {};

export default withRouter(MainPage);