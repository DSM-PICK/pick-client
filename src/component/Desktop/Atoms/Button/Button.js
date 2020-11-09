import React from "react";
import * as S from "./styles";

const Button = props => {
  const { css, value } = props;

  const { text, BtnClick } = value;
  const { width, height, color, fontSize, fontWeight, background } = css;

  return (
    <S.Container
      onClick={BtnClick}
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
