import React, {useState} from 'react';
import StyledLoginForm from "./LoginForm.styles";
import {InputText} from "../../1.atoms/InputText/InputText";
import Button from "../../1.atoms/Button/Button";
import {Shape} from "../../1.atoms/Shape/Shape";
import {Link} from "../../1.atoms/Link/Link";
import {withRouter} from "react-router-dom";
import {auth} from "../../../_actions/action";

function LoginForm(props) {
    const [id, setId] = useState("");
    const onIdHandler = (e) => setId(e.currentTarget.value)

    function toMain() {
        if (auth(id).payload) {
            props.history.push("/main")
        } else {
            alert("아이디/비밀번호가 정확하지 않습니다.")
        }
    }

    return (
        <>
            <StyledLoginForm>
                <div><InputText value={id} onChange={onIdHandler} placeholder={"아이디"}/></div>
                <br/>
                <div><InputText placeholder={"비밀번호"} type={"password"}/></div>
                <br/>
                <br/>
                <div><Button onClick={toMain} label={"로그인"}/></div>
                <br/>
                <br/>
                <div><Shape/></div>
                <div>
                    <div style={{float: "left"}}><Link label={"아이디/비밀번호 찾기"}/></div>
                    <div style={{float: "right"}}><Link href={'/signup'} label={"회원 가입"}/></div>
                </div>
            </StyledLoginForm>
        </>
    );
}

LoginForm.propTypes = {};

LoginForm.defaultProps = {};

export default withRouter(LoginForm);