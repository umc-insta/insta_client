import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Pictures from '../../component/Pictures';
import { useNavigate } from 'react-router-dom';

const Body = styled.div`
`;


const Topbar = styled.div`
  height: 50px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-end;
`;



const UserProfile = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ProfileImage = styled.img`
  width: 120px; 
  height: 100px; 
  border-radius: 50%;
  margin-right: 10px; 
  border-style: solid;
  border-color: #e2e2e2;
`;
const TransparentBtn = styled.button`
  background: none;
  border: none;
`;
const CircleBox = styled.div`
  margin: -2% 2% -2% 2%;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
`;
const DivBox = styled.div`
  flex-direction: column;
  margin-top: 0px;
  margin-bottom: 0px;
  &>p {
    display: flex;
    justify-content: center;
    margin-top: 0px;
  margin-bottom: 0px;
  }
  & p.number{
    color:black;
  }
`;

const Circle = styled.img`
width: 60px; 
height: 50px; 
border-radius: 50%;
border-style: solid;
border-color: #e2e2e2;
`;

function User({user}) {
  const [userData, setUserData] = useState({
    userDto: {
      userLoginId: "",
      userNickname: "",
      profileImage: null,
      userName: ""
    },
    postResponseDtos: []
  });
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userLoginId = user.userLoginId; 
        const axiosInstance = axios.create({
          baseURL: "http://3.35.11.221:8080/",
      });
      const response = await axiosInstance.get(`/api/auth/users/${userLoginId}`);
        console.log("user: ", response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("유저 데이터 가져오기 실패:", error);
        
      }
    };
    console.log(userData);
    fetchUserData();
  }, []); 

  const navigate = useNavigate();

  return (
    <Body>
      <Topbar>
        <Left>
          <button
            type="button"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              width: "10vw",
              height: "10vh"
            }}
            onClick={() => navigate(-1)}
          >
            <img
              style={{ width: "50%", height: "30%" }}
              src="./user_icons/free-icon-backward.png"
              alt="뒤로가기"
            />
          </button>
        </Left>
        <div style = {{display:"flex",
              justifyContent:"flex-end"}}>
        <button
            style={{
              background: "none",
              border: "none",
              margin: "-10% 20% -10%  20%",
              width:"10vw",
              height:"10vh"
            }}/>
            <img
              style={{ width: "7%", height: "7%" }}
              src="./user_icons/free-icon-notification-bell.png"
              alt="알림"
            />
        <button
            style={{
              background: "none",
              border: "none",
              padding: 0
            }}/>
            <img
              style={{ width: "7%", height: "6%" }}
              src="./user_icons/free-icon-more.png"
              alt="더보기"
            />
        </div>
      </Topbar>
      <div>
      <UserProfile>
          <div>
            <ProfileImage src={"./user_pictures/강아지.jpg"} alt="Profile" />
          </div>
          <div>
            <h2>{userData.userDto.userName}</h2>
            <button
              style={{
                border: "none",
                padding: "1vw",
                margin: "1vw",
                borderRadius: "10px"
              }}
            >
              팔로우
            </button>
            <button
              style={{
                border: "none",
                padding: "1vw",
                margin: "1vw",
                borderRadius: "10px"
              }}
            >
              메세지 보내기
            </button>
            <button
              style={{
                border: "none",
                padding: "1vw",
                margin: "1vw",
                borderRadius: "10px"
              }}
            >
              <img
                style={{ width: "20px", height: "20px" }} 
                src="./user_icons/free-icon-user.png"
                alt = ""
              />
            </button>
          </div>
        </UserProfile>
        <div style ={{display:"flex",justifyContent:"center"}}>
          <p style = {{display : "flex" ,justifyContent: "flex-end",marginLeft:"28%"}}>
            <b>{userData.userDto.userNickname}</b>
          </p>
        </div>
        <div style= {{display:"flex", margin:"0 2% 0 2%"}}>
          <CircleBox>
            <Circle src="./user_pictures/story1.jpeg"/>
            <p>cat</p>
          </CircleBox>
          <CircleBox>
            <Circle src="./user_pictures/story1.jpeg"/>
            <p>dog</p>
          </CircleBox>
          <CircleBox>
            <Circle src="./user_pictures/story1.jpeg"/>
            <p>catt</p>
          </CircleBox>
        </div>
        <hr />
        <Topbar style={{ color: "gray", justifyContent: "space-around",alignItems:"flex-start",paddingTop: "0",paddingBottom: "0" }}>
          <DivBox>
            <p>게시물</p>
            <p class = "number">6</p>
          </DivBox>
          <DivBox>
            <p>팔로워</p>
            <p class = "number">0</p>
          </DivBox>
          <DivBox>
            <p>팔로우</p>
            <p class = "number">0</p>
          </DivBox>
        </Topbar>
        <hr style={{ color: "gray" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margintop: "0",
            marginBottom: "3%"
          }}
        >
          <TransparentBtn>
            <img src="./user_icons/grid.png" style={{ width: "30px", height: "30px" }} alt= "게시물"/>
          </TransparentBtn>
          <TransparentBtn>
            <img
              src="./user_icons/free-icon-video.png"
              style={{ width: "30px", height: "30px" }}
              alt = "릴스"
            />
          </TransparentBtn>
          <TransparentBtn>
            <img
              style={{ width: "30px", height: "30px" }}
              src="./user_icons/free-icon-contact-book.png"
              alt = "태그됨"
            />
          </TransparentBtn>
        </div>
        <Pictures posts = {userData.postResponseDtos}></Pictures>
      </div>
    </Body>
  );
}

export default User;