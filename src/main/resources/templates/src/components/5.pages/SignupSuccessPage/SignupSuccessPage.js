import React from 'react';
import {Header} from "../../3.organisms/Header/Header"
import {items_login} from "./SignupSuccessPage-data.json"
import {Footer} from "../../3.organisms/Footer/Footer";
import {SignupSuccess} from "../../2.molecules/SignupSuccess/SignupSuccess";
import StyledSignupSuccessPage from "./SignupSuccessPage.styles";

export const SignupSuccessPage = () => {
    return (<>
        <StyledSignupSuccessPage/>
            <Header items1={[]} items2={items_login}/>
            <div className={"article"}>
                <SignupSuccess/>
            </div>
            <Footer/>
    </>);
};

SignupSuccessPage.propTypes = {};

SignupSuccessPage.defaultProps = {};