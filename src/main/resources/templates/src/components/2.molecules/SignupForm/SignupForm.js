import React, {useState} from 'react';
import StyledSignupForm from "./SignupForm.styles";
import {withRouter} from "react-router-dom";
import Button from "../../1.atoms/Button/Button";
import Logo from "../../1.atoms/Logo/Logo";
import {Text} from "../../1.atoms/Text/Text";
import {UnderLineInput} from "../../1.atoms/InputText/UnderLineInput/UnderLineInput";
import {setUserData} from "../../../_actions/action";

function SignupForm(props) {
    const [id, setId] = useState("");

    const onIdHandler = (event) => setId(event.currentTarget.value)

    function signUpBtnClick() {
        let userData = {
            id: id
        }
        setUserData(userData)
        props.history.push('/signup_success')
    }

    return (
        <StyledSignupForm>
            <div className={"logo"}>
                <Logo size={"regular"}/>
            </div>

            <div className={"form-area"}>
                <div className={"form id"}>
                    <Text text={"아이디"}/>
                    <div><UnderLineInput value={id} onChange={onIdHandler} placeholder={"아이디를 입력해주세요"}/></div>
                </div>
                <div className="form passwd">
                    <Text text={"비밀번호"}/>
                    <div><UnderLineInput placeholder={"비밀번호를 입력해주세요"} type={"password"}/></div>
                    <div><UnderLineInput placeholder={"비밀번호를 재입력해주세요"} type={"password"}/></div>
                </div>
                <div className="form name">
                    <Text text={"이름"}/>
                    <div><UnderLineInput placeholder={"이름를 입력해주세요"}/></div>
                </div>
                <div className="form birth">
                    <Text text={"생년월일"}/>
                    <div><UnderLineInput type={"date"}/></div>
                </div>

                <div className="form email">
                    <Text text={"본인확인 이메일"}/>
                    <div><UnderLineInput placeholder={"이메일을 입력해주세요"}/></div>
                </div>

                <div className="form tel">
                    <Text text={"본인확인 휴대전화"}/>
                    <div className={"tel2"}>
                        통신사
                        <select id="tel-sel">
                            <option selected disabled hidden/>
                            <option value="KT">KT</option>
                            <option value="SKT">SKT</option>
                            <option value="LG">LG</option>
                        </select>
                    </div>
                    <div className={"input-tel"}>
                        <UnderLineInput placeholder={"전화번호를 입력해주세요"}/>
                        <Button variant={"secondary"} label={"인증번호 받기"}/>
                    </div>
                    <UnderLineInput placeholder={"인증번호 입력"}/>
                </div>

                <br/>
                <div onClick={signUpBtnClick}><Button label={"가입하기"}/></div>
            </div>
        </StyledSignupForm>
    );
}

SignupForm.propTypes = {};

SignupForm.defaultProps = {};

export default withRouter(SignupForm);