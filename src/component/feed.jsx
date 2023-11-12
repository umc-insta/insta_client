import styled from 'styled-components';
import { useState } from 'react';

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
`;

const ContentText = styled.p`
    margin: 0;
    display: inline-block;
`;

const Button = styled.button`
    border: none;
    background: none;
    font-size: 0.9rem;


    &:focus{ 	
        border: none;
        outline: none;
        }
`;

const Feed = ({ UserProfile }) => {
    const [showFullText, setShowFullText] = useState(false);
    const [image, setImage] = useState('./icons/heartBorder.png');


    const nickname = UserProfile.nickname;
    const maxLength = nickname.length + 10;
    const text = UserProfile.content;


    const displayText = showFullText ? nickname + '  ' + text : nickname + '  ' + text.slice(0, maxLength);

    const changeFavorite = () => {
        if (image === './icons/heartBorder.png')
            setImage('./icons/heart.png');
        else {
            setImage('./icons/heartBorder.png');
        }
    };


    return (
        <div>
            <Top>
                <Div>
                    <img src={UserProfile.profileSrc} style={{ height: "2rem", width: "2rem", borderRadius: "100%", margin: "0 5% 0 5%" }}></img>
                    <p style={{ margin: "0" }}>{UserProfile.nickname}</p>
                </Div>
                <Div>
                    <img src="./icons/threeDot.png" style={{ height: "1rem", width: "1rem", paddingRight: "5%" }} />
                </Div>
            </Top>
            <img src={UserProfile.feedSrc} style={{ width: "100%", maxHeight: "50vh" }} />
            <Bottom>
                <Div>
                    <img src={image} style={{ height: "3vh", marginRight: "20%" }} onClick={changeFavorite} />
                    <img src="./icons/speech_bubble.png" style={{ height: "3vh", marginRight: "20%" }} />
                    <img src="./icons/share.png" style={{ height: "3vh", marginRight: "20%" }} />
                </Div>
                <Div>
                    <img src="./icons/bookmark.png" style={{ height: "3vh" }} />
                </Div>
            </Bottom>
            <Content>
                <p style={{ margin: "0", display: "inline-block", fontSize:"0.9rem"}}>{displayText}</p>
                {!showFullText && text.length > maxLength && (
                    <Button onClick={() => setShowFullText(true)}>...더보기</Button>
                )}
            </Content>
        </div>
    )

}

export default Feed;