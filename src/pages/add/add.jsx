import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const Topbar = styled.div`
    height: 5vh;
    display: flex;
    flex-direction: row;
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
        console.log(cont);
    }, [cont])

    return (
        <div>
            <Topbar>
                <Link to="/">
                    <p style={{ margin: "0 1% 0 3%", display: "inline" }}>X</p>
                </Link>
                <p style={{ display: "inline" }}>새 게시물</p>
                <p style={{ display: "inline", marginRight: "3%" }}>공유하기</p>
            </Topbar>
            {!imgFile && <form>
                <label htmlFor="profileImg">이미지 선택</label>
                <input type="file" accept='image/*' onChange={handleFileSelect} style={{ display: "none" }} id="profileImg" ref={imgRef} />
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