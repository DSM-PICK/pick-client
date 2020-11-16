import React from "react";
import * as S from "./styles";

const WaterDropWrap = props => {
  const { css } = props;
  const { children } = props;

  return <S.Container {...css}>{children}</S.Container>;
};

export default WaterDropWrap;
