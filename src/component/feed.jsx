import styled from 'styled-components';
import { useState } from 'react';
import CommentList from './commentList';

const Top = styled.div`
    height: 7vh;
    display: flex;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 3%;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const Bottom = styled.div`
    height: 4vh;
    display: flex;
    justify-content: space-between;
    padding: 0 5% 0 5%;
    margin: 3% 0 3% 0;
`;

const Content = styled.div`
    margin: 0 5% 3% 5%;
    font-size: 1.2rem;
`;

const Button = styled.button`
    border: none;
    background: none;
    opacity: 0.7;


    &:focus{ 	
        border: none;
        outline: none;
        }
`;

const Feed = ({ UserProfile }) => {
    const [showFullText, setShowFullText] = useState(false);
    const [image, setImage] = useState('/icons/heartBorder.png');
    const [showComment, setShowComment] = useState(false);


    const maxLength = 12;
    const text = UserProfile.content;


    const displayText = showFullText ? text : text.slice(0, maxLength);

    const changeFavorite = () => {
        if (image === '/icons/heartBorder.png')
            setImage('/icons/heart.png');
        else {
            setImage('/icons/heartBorder.png');
        }
    };

    return (
        <div>
            <div>
                <Top>
                    <Div>
                        <img src={UserProfile.profileSrc ? UserProfile.profileSrc : '/icons/user.png'} alt="user" style={{ height: "2rem", width: "2rem", borderRadius: "100%", marginRight: "15%" }}></img>
                        <p style={{ margin: "0", fontSize: "1.2rem" }}>{UserProfile.userNickName}</p>
                    </Div>
                    <Div>
                        <img src="/icons/threeDot.png" alt="threedot" style={{ height: "1rem", width: "1rem", paddingRight: "5%" }} />
                    </Div>
                </Top>
                <img src={UserProfile.imageUrl} alt="feedImage" style={{ width: "100%", maxHeight: "50vh" }} />
                <Bottom>
                    <Div>
                        <img src={image} alt="favorite" style={{ height: "3vh", marginRight: "20%" }} onClick={changeFavorite} />
                        <img src="/icons/speech_bubble.png" alt="speech_bubble" style={{ height: "3vh", marginRight: "20%" }} onClick={() => setShowComment(true)} />
                        <img src="/icons/share.png" alt="share" style={{ height: "3vh", marginRight: "20%" }} />
                    </Div>
                    <Div>
                        <img src="/icons/bookmark.png" alt="bookmark" style={{ height: "3vh" }} />
                    </Div>
                </Bottom>
                <Content>
                    <span style={{ fontWeight: "bold" }}>{UserProfile.userNickName}{'  '}</span>
                    <span style={{ margin: "0" }}>{displayText}</span>
                    {!showFullText && text.length > maxLength && (
                        <Button onClick={() => setShowFullText(true)}>...더보기</Button>
                    )}
                </Content>
            </div>
            {showComment && <CommentList UserProfile={UserProfile} setShowComment={setShowComment} />}
        </div>
    )

}

export default Feed;