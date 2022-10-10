import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100%-32px);
  padding: 16px;
  display: flex;
  flex-direction: columen;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
`;

const ContextText = styled.p`
  font-size: 14px;
`;

const CommentListItem = (props) => {
  const { Comment } = props;
  return (
    <Wrapper>
      <ContextText>{Comment.content}</ContextText>
    </Wrapper>
  );
};

export default CommentListItem;
