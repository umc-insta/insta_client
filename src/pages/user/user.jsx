import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Picture from "./Picstures";

const Body = styled.div`
  margin: 0vw 20vw 0vw 20vw;
`;

const Topbar = styled.div`
  height: 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const UserProfile = styled.div`
  height: 25vh;
  display: flex;
  justify-content: space-around;
  margin: 2vh;
`;

const ProfileImage = styled.img`
  width: 15vw;
  height: 15vh;
  border-radius: 50%;
  margin-right: 3vw;
  border-style: solid;
  border-color: #e2e2e2;
`;

const TransparentBtn = styled.button`
  background: none;
  border: none;
`;

function User() {
  const [userData, setUserData] = useState({ articles: [] });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://umc.aolda.net/GET/user/profile/{user_id}"
        );
        setUserData(response.data);
      } catch (error) {
        console.error("유저 데이터 가져오기 실패:", error);
        // 에러 처리
      }
    };

    fetchUserData();
  }, []);

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
          >
            <img
              style={{ width: "50%", height: "30%" }}
              src="/free-icon-backward.png"
              alt="뒤로가기"
            />
          </button>
        </Left>
      </Topbar>
      <div>
        <UserProfile>
          <div>
            <ProfileImage src={userData.profile_img} alt="Profile" />
          </div>
          <div>
            <h2>{userData.username}</h2>
            <button
              style={{
                border: "none",
                padding: "1vw",
                margin: "1vw",
                borderRadius: "10px"
              }}
            >
              팔로잉
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
        <div>
          <p>
            <b>{userData.usernickname}</b>
          </p>
        </div>
        <hr />
        <Topbar style={{ color: "gray", justifyContent: "space-around" }}>
          <Left>
            <p>게시물</p>
          </Left>
          <Left>
            <p>팔로우</p>
          </Left>
          <Right>
            <p>팔로워</p>
          </Right>
        </Topbar>
        <Topbar style={{ justifyContent: "space-around" }}>
          <Left>
            <p>{userData.length}</p>
          </Left>
          <Left>
            <p>0</p>
          </Left>
          <Right>
            <p>0</p>
          </Right>
        </Topbar>
        <hr style={{ color: "gray" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px"
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

        <Picture posts={userData.posts} /> 
      </div>
    </Body>
  );
}

export default User;
