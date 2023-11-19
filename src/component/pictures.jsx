import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto; // 중앙 정렬을 위해 추가
  gap: 5px; // 컨테이너 사이의 간격을 위해 추가
`;

const PictureContainer = styled.div`
  flex: 0 0 calc(32% - 1px); 
  overflow: hidden;
  position: relative; 
`;

const Picture = styled.img`
  width: 100%; 
  height: 100%; 
  object-fit: cover;  
`;

export default function Pictures(props) {
  const posts = props.posts;
  const navigate = useNavigate();

  const clickPost = (post) => {
    navigate(`/user/${post.postId}`, {
      state: { post },
  });
  }

  return (
    console.log(posts),
    <Container>
      {posts.map((post, index) => (
        <PictureContainer key={index}>
            <Picture src={post.imageUrl} alt={post.postId} onClick={() => clickPost(post)} />
        </PictureContainer>
      ))
      }
    </Container>
  );
}