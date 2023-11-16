import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

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

function Search() {
    const [userNickName, setUserNickName] = useState('');
    const [searchList, setSearchList] = useState([]);

    const userList = {
        "users": [
            {
                "profileSrc": "./suzy/suzy_profile.jpeg",
                "user_id": "john_doe",
                "user_nickname": "jone"
            },
            {
                "profileSrc": "./suzy/suzy_profile.jpeg",
                "user_id": "johnny123",
                "user_nickname": "johnny",
            },
            {
                "profileSrc": "./suzy/suzy_profile.jpeg",
                "user_id": "big_john",
                "user_nickname": "big_john"
            },
            {
                "profileSrc": "./suzy/suzy_profile.jpeg",
                "user_id": "juu.n_s__",
                "user_nickname": "홍준서"
            }
            // ... 해당 키워드를 포함하는 다른 유저 아이디들
        ]
    }

    function changeUserNickName(event) {
        setUserNickName(event.target.value);
    }

    useEffect(() => {
        const filteredList = userList.users.filter(user => user.user_id.includes(userNickName));
        setSearchList(filteredList);
        console.log(searchList);

    }, [userNickName])

    return (
        <div>
            <Div>
                <img src="./icons/magnifying.png" style={{ width: "5vw", height: "5wh", marginRight: "2%" }} />
                <Input type="text" placeholder="검색" onChange={changeUserNickName}></Input>
            </Div>
            {userNickName && searchList.map((user, index) => {
                return (
                    <Button key={index}>
                        <img src={user.profileSrc} style={{ height: "3rem", width: "3rem", borderRadius: "100%", margin: "0 5% 0 5%" }}></img>
                        <div>
                            <p style={{margin : 0 }}>{user.user_id}</p>
                            <p style={{margin : 0, color: "gray", display: "flex", alignItems: "flex-start", opacity: 0.7}}>{user.user_nickname}</p>
                        </div>
                    </Button>
                )
            })}
        </div>
    )
}

export default Search;