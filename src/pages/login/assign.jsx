import { Card, LoginCard, AssignCard, LoginBtn } from './login';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Assign() {
    const [isDisable, setIsDisable] = useState("disabled");
    const [id, setId] = useState('');
    const [userName, setUserName] = useState('');
    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const role = "USER";
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

    const addUser = async (e) => {
        e.preventDefault();   //form에서 onSubmit했을 때 바로 새로운 페이지로 연결되는 것을 막는 event

        const axiosInstance = axios.create({
            baseURL: "http://3.35.11.221:8080",
          });
          try {
            const response = await axiosInstance.post("/api/auth/register", {
                userLoginId: id,
                password: password,
                role: role,
                userName: userName,
                userNickName: nickName,
            });
            console.log(response);
      
      
            setShow(true);

          } catch (error) {
            console.log("error: ", error);
          }
        
        // const findUser = UserList.find(item => JSON.stringify(item) === JSON.stringify(user));
        // setIsUser(findUser);
    }


    return (
        <Card>
            <LoginCard>
                <img src="./instagram_logo.png" alt="instagram_logo" style={{ width: "60%", margin: "5% 0 5% 0" }} />
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
                    <LoginBtn disabled={isDisable} onClick={addUser} >가입하기</LoginBtn>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>회원가입</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>회원가입을 축하드립니다!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => handleClose(false)}>
                                닫기
                            </Button>
                            <Button variant="primary" onClick={() => handleClose(true)}>
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