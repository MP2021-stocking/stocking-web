import React from 'react';
import StyledLoginPage from "./LoginPage.styles";
import {withRouter} from "react-router-dom";
import {Logo} from "../../1.atoms/Logo/Logo";
import {LoginForm} from "../../2.molecules/LoginForm/LoginForm";
import {Header} from "../../3.organisms/Header/Header"
import {Footer} from "../../3.organisms/Footer/Footer";
import {items_login} from "./LoginPage-data.json"

function LoginPage() {
    return (<>
        <StyledLoginPage/>
        <Header items1={[]} items2={items_login}/>
        <div className={"article"}>
            <div className={"article-logo"}><Logo size={"big"}/></div>
            <div className={"article-form"}><LoginForm/></div>
        </div>
        <Footer/>
    </>);
}

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default withRouter(LoginPage);