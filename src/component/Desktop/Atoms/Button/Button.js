import React from "react";
import * as S from "./styles";

const Button = props => {
  const {
    text,
    width,
    height,
    color,
    fontSize,
    fontWeight,
    background
  } = props;

  return (
    <S.Container
      width={width}
      height={height}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      background={background}
    >
      {text}
    </S.Container>
  );
};

export default Button;
