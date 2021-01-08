import React from "react";
import * as S from "./styles";

const Button = props => {
  const { text, css } = props;
  const { onClick } = props;

  return (
    <S.Container {...css} onClick={onClick}>
      {text}
    </S.Container>
  );
};

export default Button;
