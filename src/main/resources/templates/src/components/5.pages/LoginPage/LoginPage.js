import React from 'react';
import StyledLoginPage from "./LoginPage.styles";
import {withRouter} from "react-router-dom";
import Logo from "../../1.atoms/Logo/Logo";
import LoginForm from "../../2.molecules/LoginForm/LoginForm";
import Header from "../../3.organisms/Header/Header"
import {Footer} from "../../3.organisms/Footer/Footer";
import {getHeaderData} from "../../../_actions/action";

function LoginPage() {
    return (<>
        <StyledLoginPage/>
        <Header logoLink={'/'} items1={[]} items2={getHeaderData().payload.items_login}/>
        <div className={"article"}>
            <div className={"article-logo"}><Logo logoLink={null} size={"big"}/></div>
            <div className={"article-form"}><LoginForm/></div>
        </div>
        <Footer/>
    </>);
}

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default withRouter(LoginPage);