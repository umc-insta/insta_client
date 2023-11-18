import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Div = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 95vh;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.6); 
`;
const Top = styled.div`
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border: none;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
`;

const Bottom = styled.div`
    height: 5vh;
    width: 100%;
    position: fixed;
    bottom: 5vh;
    display: flex;
    align-items: center;
`;

const CommentList = ({ UserProfile, setShowComment }) => {
    const [inputValue, setInputValue] = useState({});

    const saveInputValue = () => {
        var input = document.getElementById('inputField').value;
        setInputValue({
            "comment_id": '103',
            "username": 'comment_user3',
            "text": input,
        });
    }

    useEffect(() => {
        if((inputValue.text !== null)) {
            UserProfile.comments.push(inputValue);
            console.log("UserProfile", UserProfile.comments);
        }
    }, [inputValue])

    return (
        <Div>
            <div style={{ marginTop: "5vh", height: "90vh", backgroundColor: "white" }}>
                <Top>
                    <span style={{ marginLeft: "auto" }}>댓글</span>
                    <span style={{ marginLeft: "auto", marginRight: "3%"}} onClick={() => setShowComment(false)}>X</span>
                </Top>
                {UserProfile.comments.map((comment, index) => {
                    return (
                        <div key={index} style={{ height: "3.5rem", marginLeft: "3%", display: "flex", flexDirection: "row", alignItems: "center" }} >
                            <div style={{border: "1px solid black", borderRadius:"100%", width:"2rem", height:"2rem", marginRight: "1rem"}}></div>
                            <div>
                                <p style={{ margin: "0" }}>{comment.username}</p>
                                <p style={{ margin: "0" }}>{comment.text}</p>
                            </div>
                        </div>
                    )
                })}
                <Bottom>
                    <img src={UserProfile.profileSrc} alt="default" style={{width: "2rem", height: "2rem", borderRadius: "100%", margin:"0 0.5rem 0 0.5rem"}}></img>
                    <input type="text" style={{width: "70%", marginRight: "0.5rem"}} id="inputField"></input>
                    <button style={{width: "3rem"}} onClick={saveInputValue}>게시</button>
                </Bottom>
            </div>
        </Div>
    )

}



export default CommentList;