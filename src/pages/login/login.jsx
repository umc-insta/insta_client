import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction : column;
    height: 95vh;

`;

export const LoginCard = styled.div`
    border: 1px solid rgb(227, 227, 227);
    width: 70%;
    height: 70%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3%;
    background-color: white;
`;
export const AssignCard = styled.div`
    border: 1px solid rgb(227, 227, 227);
    width: 70%;
    height: 10vh;
    background-color: white;
    display: flex;
    justify-content: center;
`;

export const LoginBtn = styled.button`
    background-color: #00aeff;  
    color: white;
    border: none;
    width: 100%;
    padding: 1% 0 1% 0;
    border-radius: 2px;
    margin: 5% 0 5% 0;

    &:disabled {
        opacity: 0.5; 
      }
`;
// unactivated button color: #acd5e8


function Login({setLoginSuccess}) {
    const [isDisable, setIsDisable] = useState("disabled");
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccess, setIsSuccess] = useState('');
    const [show, setShow] = useState(false);
    const [isUser, setIsUser] = useState({});
    const navigate = useNavigate();

    const UserList = [
        {
            "userId": "1234",
            "password": "qwer",
        },
        {
            "userId": "qwer",
            "password": "1234",
        },
        {
            "userId": "q1w2e3r4",
            "password": "q1w2e3r4",
        },
    ];

    const changeId = (event) => {
        setId(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const checkUser = () => {
        setShow(true);     // 로그인 버튼 클릭한 경우 모달 열기
        const user = {
            "userId": id,
            "password": password,
        };
        const findUser = UserList.find(item => JSON.stringify(item) === JSON.stringify(user));
        setIsUser(findUser);

        if (findUser) {
            setIsSuccess('로그인되었습니다.');

        }
        else {
            setIsSuccess('로그인 정보가 올바르지 않습니다.');
        }
    }


    const handleClose = (next) => {
        if (next) {
            setLoginSuccess(true);
            navigate('/home');

        }
        else {
            setShow(false);
        }
    }

    useEffect(() => {
        if (id && password) {
            setIsDisable("");
        }
        else {
            setIsDisable("disabled");
        }
    }, [id, password])

    return (
        <Card>
            <LoginCard>
                <img src="./instagram_logo.png" style={{ width: "60%", marginBottom: "10%" }} />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <form style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "5%" }}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="전화번호, 사용자 이름 또는 이메일"
                            className="mb-3"
                            id="floatingLabel"
                        >
                            <Form.Control type="email" placeholder="name@example.com" onChange={changeId} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="비밀번호" id="floatingLabel" >
                            <Form.Control type="password" placeholder="Password" onChange={changePassword} />
                        </FloatingLabel>

                    </form>
                    <LoginBtn disabled={isDisable} onClick={checkUser}>로그인</LoginBtn>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>로그인</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{isSuccess}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => handleClose(false)}>
                                닫기
                            </Button>
                            {isUser && <Button variant="primary" onClick={() => handleClose(true)}> {/*  로그인 성공한 경우에만 표시 */}
                                확인
                            </Button>}
                        </Modal.Footer>
                    </Modal>

                    <button style={{ background: "transparent", border: "none", fontSize: "0.8rem" }}>비밀번호를 잊으셨나요?</button>

                </div>

            </LoginCard>
            <AssignCard style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem" }}>계정이 없으신가요? </span>
                <Link to="/assign">
                    <button style={{ background: "transparent", border: "none", fontSize: "0.8rem", color: "#00aeff", fontWeight: "bold" }}>가입하기</button>
                </Link>
            </AssignCard>
        </Card>
    )
}

export default Login;