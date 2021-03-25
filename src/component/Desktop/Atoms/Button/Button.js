import React from "react";
import * as S from "./styles";

const Button = props => {
  const { buttonDisabled, text, css } = props;
  const { onClick } = props;

  return (
    <S.Container {...css} buttonDisabled={buttonDisabled} onClick={onClick}>
      {text}
    </S.Container>
  );
};

export default React.memo(Button);
