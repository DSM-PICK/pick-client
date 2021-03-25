import React from "react";
import * as S from "./styles";

const Background = props => {
  const { css } = props;

  return <S.Container {...css}>{props.children}</S.Container>;
};

export default React.memo(Background);
