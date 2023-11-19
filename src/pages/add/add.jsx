import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

const Topbar = styled.div`
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 3%;
`;

const Textarea = styled.textarea`
    width: 60%;
    height: 50vh;
    border: none;

    &:focus{ 	
        border: none;
        outline: none;
        }
`;

const SubmitButton = styled.button`
    border: none;
    padding: 1% 0 1% 0;
    border-radius: 2px;
    margin: 5% 0 5% 0;
    background-color: transparent;

`;

function Add({ user }) {
    const [image, setImage] = useState(null);
    const [cont, setCont] = useState('');
    const navigate = useNavigate();

    const handleFileSelect = async (e) => {

        const file = e.target.files[0];
        setImage(file);


        if (file) {
            const reader = new FileReader();
        
            reader.onload = (e) => {
              const imageDataUrl = e.target.result;
              
              // imageDataUrl을 사용하여 이미지를 표시하거나 처리합니다.
              const imgElement = document.getElementById('output-image');
              imgElement.src = imageDataUrl;
            };
        
            reader.readAsDataURL(file);
          }

    }

    function changeCont(event) {
        setCont(event.target.value);

    }

    const addFeed = async (e) => {
        e.preventDefault();  

        const formData = new FormData();
        formData.append('userLoginId', user.userLoginId);
        formData.append('content', cont);
        formData.append('file', image);

        try {
            await fetch('http://3.35.11.221:8080/api/posts/upload', {
                method: 'POST',
                body: formData,
            });

            navigate('/home');
        } catch (error) {
            console.error('이미지 업로드 에러:', error);
        }
    }

    function changeCont (event) {
        setCont(event.target.value);
    
    }

    useEffect (() => {
        console.log(cont);
    }, [cont])

    return (
        <div>
            <Topbar>
                <p style={{ margin: "0.5rem", display: "inline" }} onClick={() => navigate(-1)}>X</p>
                <span>새 게시물</span>
                <SubmitButton type="submit" onClick={addFeed} style={{ marginRight: "3%" }}>공유하기</SubmitButton>
            </Topbar>
            {image ?
                image && <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <img src={'./icons/user.png'} style={{ height: "2.5rem", width: "2.5rem", borderRadius: "100%", margin: "0 2% 0 2%" }} />
                    <Textarea type="text" onChange={changeCont}></Textarea>
                    <img id="output-image" alt="output" style={{ height: "5rem", width: "5rem", margin: "0 2% 0 2%" }} />
                </div>
                :
                <form style={{ marginLeft: "5%", width: "30vh", height: "10vh" }}>
                    <label htmlFor="profileImg" style={{ width: "100%", height: "100%" }}>이미지 선택</label>
                    <input type="file" accept='image/*' onChange={handleFileSelect} style={{ display: "none", width: "100%", height: "100%" }} id="profileImg" />
                </form>
            }
        </div>
    )
}

export default Add;