import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const PictureContainer = styled.div`
  flex: 0 0 calc(30% - 1%);
  /height: 18vw;
  overflow: hidden;
  position: relative;
`;

const Picture = styled.img`
  position: absolute;
`;

export default function Pictures(props) {
  const { posts } = props;

  return (
    <Container>
      {posts.map((post) => (
        <PictureContainer key={post[0]}>
          <Picture src={post[1]} alt="사진" />
        </PictureContainer>
      ))}
    </Container>
  );
}
