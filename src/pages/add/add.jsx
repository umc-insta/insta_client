import styled from 'styled-components';

const Topbar = styled.div`
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

function Add() {
    const selectedFile = 

    function handleFileSelect(event) {
        const selectedFile = event.target.files[0];
        console.log('Selected File:', selectedFile);

    }

    return (
        <div>
            <img></img>
            <Topbar>
                <div style={{ margin: "0.5%", height: "90%", fontWeight: "bold"}}>
                    새 게시물
                </div>
            </Topbar>
            <input type="file" id="fileInput" onchange={handleFileSelect} />
        </div>
    )
}

export default Add;