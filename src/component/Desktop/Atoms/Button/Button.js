import React from "react";
import * as S from "./styles";

const Button = props => {
  const { css, text } = props;
  const { ButtonClick } = props;

  return (
    <S.Container onClick={ButtonClick} css={css}>
      {text}
    </S.Container>
  );
};

export default Button;
