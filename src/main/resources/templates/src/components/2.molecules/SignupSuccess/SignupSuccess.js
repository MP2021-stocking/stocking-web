import React from 'react';

import StyledSignupSuccess from "./SignupSuccess.styles";
import {Logo} from "../../1.atoms/Logo/Logo";

export const SignupSuccess = () => {
    return (
        <StyledSignupSuccess>
            <div className={"logo"}>
                <Logo size={"regular"}/>
            </div>

            <div className="p1">
                <p> "축하합니다!" </p>
            </div>

            <div className="p2">
            <pre>{`회원가입이 정상적으로
완료되었습니다.`} </pre>
            </div>

            <div className="signup-id">
                <p>가입한 아이디</p>
            </div>

        </StyledSignupSuccess>
    );
};

SignupSuccess.propTypes = {};

SignupSuccess.defaultProps = {};