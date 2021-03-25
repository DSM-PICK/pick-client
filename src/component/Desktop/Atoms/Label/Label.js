import React from "react";
import * as S from "./styles";

const Label = props => {
  const { css, text } = props;

  return <S.Container {...css}>{text}</S.Container>;
};

export default React.memo(Label);
