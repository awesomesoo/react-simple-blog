import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cusor: pointer;
`;

const Button = (props) => {
  const { title, onClick } = props;
  return (
    <div>
      <StyleButton onClick={onClick}>{title || "button"}</StyleButton>
    </div>
  );
};

export default Button;
