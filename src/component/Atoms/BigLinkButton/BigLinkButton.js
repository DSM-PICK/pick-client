import React from "react";
import * as S from "./styles";

const BigLinkButton = props => {
  const { link, text } = props;

  return (
    <S.Container to={{ pathname: link, state: { title: text } }}>
      {text}
    </S.Container>
  );
};

export default BigLinkButton;
