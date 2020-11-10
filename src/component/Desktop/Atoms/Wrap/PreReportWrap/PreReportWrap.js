import React from "react";
import * as S from "./styles";

const PreReportWrap = props => {
  const { css } = props;
  const { children } = props;

  return <S.Container {...css}>{children}</S.Container>;
};

export default PreReportWrap;
