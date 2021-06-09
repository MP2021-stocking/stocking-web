import React from 'react';
import StyledSignupSuccessPage from "./SignupSuccessPage.styles";
import SignupSuccess from "../../2.molecules/SignupSuccess/SignupSuccess";
import Header from "../../3.organisms/Header/Header"
import {Footer} from "../../3.organisms/Footer/Footer";
import {getHeaderData} from "../../../_actions/action";
import {withRouter} from "react-router-dom";

function SignupSuccessPage() {
    return (<>
        <StyledSignupSuccessPage/>
        <Header logoLink={'/'} items1={[]} items2={getHeaderData().payload.items_login}/>
        <div className={"article"}>
            <SignupSuccess/>
        </div>
        <Footer/>
    </>);
}

SignupSuccessPage.propTypes = {};

SignupSuccessPage.defaultProps = {};

export default withRouter(SignupSuccessPage);