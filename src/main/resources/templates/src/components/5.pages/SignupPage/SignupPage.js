import React from 'react';
import StyledSignupPage from "./SignupPage.styles";
import {SignupForm} from "../../2.molecules/SignupForm/SignupForm";
import {Footer} from "../../3.organisms/Footer/Footer";
import {Header} from "../../3.organisms/Header/Header"
import {withRouter} from "react-router-dom";
import {items_login} from "./SignupPage-data.json"

function SignupPage() {
    return (<>
        <StyledSignupPage/>
        <Header items1={[]} items2={items_login}/>
        <div className={"article"}>
            <SignupForm/>
        </div>
        <Footer/>
    </>);
}

SignupPage.propTypes = {};

SignupPage.defaultProps = {};

export default withRouter(SignupPage);