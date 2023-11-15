import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction : column;
    height: 100vh;

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


function Login() {
    const [isDisable, setIsDisable] = useState("disabled");
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
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
        const user = {
            "userId" : id,
            "password": password,
        };
        const isUser = UserList.find(item => JSON.stringify(item) === JSON.stringify(user));
        if (isUser) {
            navigate('/home');
        }
        else {
        }
    }

    useEffect (() => {
        if(id && password) {
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
                            <Form.Control type="password" placeholder="Password" onChange={changePassword}/>
                        </FloatingLabel>

                    </form>
                    <LoginBtn disabled={isDisable} onClick={checkUser}>로그인</LoginBtn>

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