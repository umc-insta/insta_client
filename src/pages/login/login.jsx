import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

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


function Login({ setUser }) {
    const [isDisable, setIsDisable] = useState("disabled");
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccess, setIsSuccess] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const checkUser = async (e) => {
        e.preventDefault();   //form에서 onSubmit했을 때 바로 새로운 페이지로 연결되는 것을 막는 event

        const axiosInstance = axios.create({
            baseURL: "http://3.35.11.221:8080",
          });
          try {
            const response = await axiosInstance.post("/api/auth/login", {
              userLoginId: id,
              password: password,
            });
            console.log(response);
            const authToken = response.data.accessToken;
            localStorage.setItem("access_token", authToken);
      
            const config = {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            };
      
            const infoResponse = await axiosInstance.get("/api/auth/info", config);
            console.log("access token 값" + authToken);
            console.log(infoResponse.data);
            //console.log(infoResponse.data.memberRole);
            alert(id + "(" + infoResponse.data.memberRole + ")" + "님 환영합니다");
      
            setUser(infoResponse.data);

            navigate("/home");
          } catch (error) {
            setIsSuccess('로그인 정보가 올바르지 않습니다.');
          }
        
        // const findUser = UserList.find(item => JSON.stringify(item) === JSON.stringify(user));
        // setIsUser(findUser);
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
                            <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setId(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="비밀번호" id="floatingLabel" >
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                        </FloatingLabel>

                    </form>
                    <LoginBtn type="submit" disabled={isDisable} onClick={checkUser}>로그인</LoginBtn>
                    <Modal show={show} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>로그인</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{isSuccess}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShow(false)}>
                                닫기
                            </Button>
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