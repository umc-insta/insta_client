import styled from 'styled-components';
import { Card, LoginCard, AssignCard, LoginBtn } from './login';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function Assign() {
    const [isDisable, setIsDisable] = useState("disabled");
    const [id, setId] = useState('');
    const [userName, setUserName] = useState('');
    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (id && password && userName && nickName) {
            setIsDisable("");
        }
        else {
            setIsDisable("disabled");
        }
    }, [id, password, userName, nickName]);

    const handleClose = (next) => {
        if (next) {
            navigate('/');

        }
        else {
            setShow(false);
        }
    }

    const addUser = () => {
        const newUser = {
            "userId": id,
            "usernickname": nickName,
            "username": userName,
            "password": password,
        }

        setUser(newUser);
        setShow(true);
    }

    return (
        <Card>
            <LoginCard>
                <img src="./instagram_logo.png" style={{ width: "60%", margin: "5% 0 5% 0" }} />
                <p style={{ fontSize: "0.8rem" }}>친구들의 사진과 동영상을 보려면 가입하세요.</p>
                <form style={{ display: "flex", flexDirection: "column" }}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="휴대폰 번호 또는 이메일 주소"
                        className="mb-3"
                        id="floatingLabel"
                    >
                        <Form.Control type="email" placeholder="휴대폰 번호 또는 이메일 주소"
                            onChange={(event) => setId(event.target.value)} />
                    </FloatingLabel>
                    <FloatingLabel
                        label="성명"
                        className="mb-3"
                        id="floatingLabel"
                    >
                        <Form.Control type="text" placeholder="성명"
                            onChange={(event) => setUserName(event.target.value)} />
                    </FloatingLabel>
                    <FloatingLabel
                        label="사용자 이름"
                        className="mb-3"
                        id="floatingLabel"
                    >
                        <Form.Control type="text" placeholder="사용자 이름"
                            onChange={(event) => setNickName(event.target.value)} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="비밀번호" id="floatingLabel" >
                        <Form.Control type="password" placeholder="Password"
                            onChange={(event) => setPassword(event.target.value)} />
                    </FloatingLabel>
                    <LoginBtn type="button" disabled={isDisable} onClick={addUser} >가입하기</LoginBtn>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>회원가입</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>회원가입을 축하드립니다!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => handleClose(false)}>
                                닫기
                            </Button>
                            <Button variant="primary" onClick={() => handleClose(true)}> {/*  로그인 성공한 경우에만 표시 */}
                                확인
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </form>
            </LoginCard>
            <AssignCard style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem" }}>계정이 있으신가요? </span>
                <Link to="/">
                    <button style={{ background: "transparent", border: "none", fontSize: "0.8rem", color: "#00aeff", fontWeight: "bold" }}>로그인</button>
                </Link>
            </AssignCard>
        </Card>
    )
}

export default Assign;