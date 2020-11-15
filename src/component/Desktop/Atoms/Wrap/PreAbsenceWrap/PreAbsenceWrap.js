import React from "react";
import * as S from "./styles";

const PreAbsenceWrap = props => {
  const { css } = props;
  const { children } = props;

  return <S.Container {...css}>{children}</S.Container>;
};

export default PreAbsenceWrap;
