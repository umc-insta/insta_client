import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from "axios";

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin: 3% 10% 3% 10%;
    align-items: center;
    border: 1px solid black;
`;

const Input = styled.input`
    width: 90%;
    border: none;

    &:focus{ 	
        border: none;
        outline: none;
        }
`;

const Button = styled.button`
    width: 100%;
    height: 70px;
    border:none;
    background: none;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

function Search({ user }) {
    const [userNickName, setUserNickName] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [userList, setUserList] = useState(null);

    function changeUserNickName(event) {
        setUserNickName(event.target.value);
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get("http://3.35.11.221:8080/api/auth/users/search", {
                    params: {
                        userLoginId: user.userLoginId,
                    }
                });


                console.log("userList: ", response.data);
                setUserList(response.data);
            }
            catch (error) {
                console.log("dfdf", error);
            }
        }

        fetchData();

    }, []);


    useEffect(() => {
        if (userList) {
            const filteredList = userList.users.filter(user => user.userNickname.includes(userNickName));
            setSearchList(filteredList);
        }

    }, [userNickName])

    return (
        <div>
            <Div>
                <img src="./icons/magnifying.png" alt="magnifying" style={{ width: "5vw", height: "5wh", marginRight: "2%" }} />
                <Input type="text" placeholder="검색" onChange={changeUserNickName}></Input>
            </Div>
            {userNickName && searchList.map((user, index) => {
                return (
                    <Button key={index}>
                        <img src='icons/user.png' alt="user" style={{ height: "3rem", width: "3rem", borderRadius: "100%", margin: "0 5% 0 5%" }}></img>
                        <div>
                            <p style={{ margin: 0 }}>{user.userNickname}</p>
                            <p style={{ margin: 0, color: "gray", display: "flex", alignItems: "flex-start", opacity: 0.7 }}>{user.userName}</p>
                        </div>
                    </Button>
                )
            })}
        </div>
    )
}

export default Search;