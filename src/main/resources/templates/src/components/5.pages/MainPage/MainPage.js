import React from 'react';
import StyledMainPage from "./MainPage.styles";
import {withRouter} from "react-router-dom";
import {Header} from "../../3.organisms/Header/Header"
import {Footer} from "../../3.organisms/Footer/Footer";
import MainPageBody from "../../3.organisms/MainPageBody/MainPageBody";
import {items_login} from "./MainPage-data.json"

function MainPage() {
    return (<>
        <StyledMainPage/>
        <Header items1={[]} items2={items_login}/>
        <div className={"body"}>
            <MainPageBody/>
        </div>
        <Footer/>
    </>);
}

MainPage.propTypes = {};

MainPage.defaultProps = {};

export default withRouter(MainPage);