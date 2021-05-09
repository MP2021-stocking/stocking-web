import React from 'react';
import {Header} from "../../3.organisms/Header/Header"
import {items_login} from "./SignupPage-data.json"
import {Footer} from "../../3.organisms/Footer/Footer";
import {SignupForm} from "../../2.molecules/SignupForm/SignupForm";
import StyledSignupPage from "./SignupPage.styles";

export const SignupPage = () => {
    return (<>
        <StyledSignupPage/>
            <Header items1={[]} items2={items_login}/>
            <div className={"article"}>
                <SignupForm/>
            </div>
            <Footer/>
    </>);
};

SignupPage.propTypes = {};

SignupPage.defaultProps = {};