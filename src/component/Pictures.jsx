import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto; // 중앙 정렬을 위해 추가됨
  max-width: 1200px; // 최대 너비 설정을 위해 추가됨
  gap: 20px; // 컨테이너 사이의 간격을 위해 추가됨
`;

const PictureContainer = styled.div`
  flex: 0 0 calc(30% - 20px); // gap에 맞춰서 계산식 조정
  height: 300px; // 고정된 높이를 가지게 변경
  overflow: hidden;
  position: relative;
  border: 1px solid #e2e2e2; // 테두리 추가
  border-radius: 10px; // 둥근 모서리를 위해 추가됨
`;

const Picture = styled.img`
  width: 100%; // 이미지가 컨테이너에 꽉 차도록 설정
  height: 100%; // 이미지가 컨테이너에 꽉 차도록 설정
  object-fit: cover; // 이미지 비율을 유지하면서 컨테이너를 꽉 채움
  border-radius: 10px; // 둥근 모서리를 위해 추가됨
`;

export default function Pictures(props) {
  const posts = [{
    postid: "12348",
    thumbnail: "./user_pictures/고양이.png"
},
{
  postid: "12349",
      thumbnail: "./user_pictures/고양이.png"  
},{
  postid: "12348",
  thumbnail: "./user_pictures/고양이.png"
},
{
postid: "12349",
    thumbnail: "./user_pictures/고양이.png"  
},{
  postid: "12348",
  thumbnail: "./user_pictures/고양이.png"
},
{
postid: "12349",
    thumbnail: "./user_pictures/고양이.png"  
}]

  return (
    <Container>
      {posts.map((post, index) => (
        <PictureContainer key={index}>
          <Picture src={post.thumbnail} alt={post.postid} />
        </PictureContainer>
      ))}
    </Container>
  );
}
