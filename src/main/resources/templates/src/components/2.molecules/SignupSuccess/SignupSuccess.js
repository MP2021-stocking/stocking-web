import React from 'react';
import StyledSignupSuccess from "./SignupSuccess.styles";
import {withRouter} from "react-router-dom";
import Logo from "../../1.atoms/Logo/Logo";
import {getUserData} from "../../../_actions/action";

function SignupSuccess() {
    let id = getUserData().payload.id
    return (
        <StyledSignupSuccess>
            <div className={"logo"}>
                <Logo logoLink={'/'} size={"regular"}/>
            </div>

            <div className="p1">
                <p> "축하합니다!" </p>
            </div>

            <div className="p2">
            <pre>{`회원가입이 정상적으로
완료되었습니다.`} </pre>
            </div>

            <div className="signup-id">
                <p>{id}</p>
            </div>

        </StyledSignupSuccess>
    );
}

SignupSuccess.propTypes = {};

SignupSuccess.defaultProps = {};

export default withRouter(SignupSuccess)