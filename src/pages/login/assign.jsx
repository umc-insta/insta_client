import styled from 'styled-components';
import { Card, LoginCard, AssignCard, LoginBtn } from './login';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Assign() {
    const [isDisable, setIsDisable] = useState("disabled");
    return (
        <Card>
            <LoginCard>
                <img src="./instagram_logo.png" style={{ width: "60%", margin: "5% 0 5% 0" }} />
                <p style={{fontSize:"0.8rem"}}>친구들의 사진과 동영상을 보려면 가입하세요.</p>
                <form style={{ display: "flex", flexDirection: "column" }}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="휴대폰 번호 또는 이메일 주소"
                        className="mb-3"
                        id="floatingLabel"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="성명"
                        className="mb-3"
                        id="floatingLabel"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="사용자 이름"
                        className="mb-3"
                        id="floatingLabel"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="비밀번호" id="floatingLabel" >
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                        <LoginBtn id="submit" disabled={isDisable}>가입하기</LoginBtn>
                </form>
            </LoginCard>
            <AssignCard style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem" }}>계정이 있으신가요? </span>
                <Link to="/">
                    <button style={{ background: "transparent", border: "none", fontSize: "0.8rem", color: "#00aeff", fontWeight: "bold" }}>로그인</button>
                </Link>
            </AssignCard>
            {/* <div id="success_back" style={{display: "none"}}>
                <div id="success">
                    <div id="success_main">
                        <h2 id="success_h">가입 성공!</h2>
                        <p id="success_para">umc 챌린저 가입을 축하합니다!!</p>
                    </div>
                    <div id="success_btn">
                        <button >닫기</button>
                    </div>
                </div>
            </div> */}
        </Card>
    )
}

export default Assign;