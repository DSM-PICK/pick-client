import React from "react";
import * as S from "./styles";

const UserButton = props => {
  const { css, text } = props;
  const { ButtonClick } = props;

  return (
    <S.UBContainer onClick={ButtonClick} css={css}>
      {text}
    </S.UBContainer>
  );
};

export default UserButton;
