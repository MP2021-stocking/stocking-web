import React from 'react';
import {Header} from "../../3.organisms/Header/Header"
import {items_login} from "./MainPage-data.json"
import {Footer} from "../../3.organisms/Footer/Footer";
import StyledMainPage from "./MainPage.styles";
import {MainPageBody} from "../../3.organisms/MainPageBody/MainPageBody";

export const MainPage = () => {
    return (<>
        <StyledMainPage/>
        <Header items1={[]} items2={items_login}/>
        <div className={"body"}>
            <MainPageBody/>
        </div>
        <Footer/>
    </>);
};

MainPage.propTypes = {};

MainPage.defaultProps = {};