import styled from 'styled-components';

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

const CommentList = ({ comments }) => {
    return (
        <Div>
            <div style={{ marginTop: "5vh", height: "90vh", backgroundColor: "white" }}>
                <Top>
                    <span style={{marginLeft:"auto"}}>댓글</span>
                    <span style={{marginLeft:"auto", marginRight:"3%"}}>X</span>
                </Top>
                {comments.map((comment, index) => {
                    return (
                        <div key={index} style={{height:"3.5rem", marginLeft: "3%"}} >
                            <p style={{margin: "0"}}>{comment.username}</p>
                            <p style={{margin: "0"}}>{comment.text}</p>
                        </div>
                    )

                })}
            </div>
        </Div>
    )

}



export default CommentList;