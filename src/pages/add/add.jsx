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
    height: 80vh;
    border: none;

    &:focus{ 	
        border: none;
        outline: none;
        }
`;

function Add({userInfor}) {
    const [imgFile, setImgFile] = useState("");
    const imgRef = useRef();
    const [cont, setCont] = useState('');
    const navigate = useNavigate();

    function handleFileSelect(event) {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onloadend = () => {
            setImgFile(reader.result);
        };

    }

    function changeCont (event) {
        setCont(event.target.value);
    
    }

    useEffect (() => {
        console.log(imgFile);
    }, [imgFile])

    return (
        <div>
            <Topbar>
                    <p style={{ margin: "0.5rem", display: "inline" }} onClick={() => navigate(-1)}>X</p>
                <span>새 게시물</span>
                <span style={{ marginRight: "3%" }}>공유하기</span>
            </Topbar>
            {!imgFile && <form style={{marginLeft: "5%", width: "70vh", height:"10vh"}}>
                <label htmlFor="profileImg" style={{width: "100%", height:"100%"}}>이미지 선택</label>
                <input type="file" accept='image/*' onChange={handleFileSelect} style={{ display: "none",width: "100%", height:"100%" }} id="profileImg" ref={imgRef} />
            </form>}
            {imgFile && <div style={{display: "flex", alignItems:"flex-start"}}>
                <img src={userInfor.userProfileUrl} style={{ height: "2.5rem", width: "2.5rem", borderRadius: "100%", margin: "0 2% 0 2%" }}/>
                <Textarea type="text" onChange={changeCont}></Textarea>
                <img src={imgFile}  style={{ height: "5rem", width: "5rem", margin: "0 2% 0 2%" }}/>
            </div>}
        </div>
    )
}

export default Add;