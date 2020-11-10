import React from "react";
import * as S from "./styles";

const LinkButton = props => {
  const { text, path, css } = props;

  return (
    <S.Container to={path} css={css}>
      {text}
    </S.Container>
  );
};

export default LinkButton;
