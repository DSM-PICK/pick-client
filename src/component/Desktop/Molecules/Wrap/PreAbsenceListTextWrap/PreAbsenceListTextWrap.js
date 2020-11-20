import React from "react";
import * as S from "./styles";

const PreAbsenceListTextWrap = props => {
  const { ParagraphTexts } = props;
  const { ParagraphCSS } = props;
  const { stdnum, name, state, during, reason } = ParagraphTexts;

  return (
    <S.Container>
      <S.Stdnum {...ParagraphCSS}>{stdnum}</S.Stdnum>
      <S.Name {...ParagraphCSS}>{name}</S.Name>
      <S.State {...ParagraphCSS}>{state}</S.State>
      <S.During {...ParagraphCSS}>{during}</S.During>
      <S.Reason {...ParagraphCSS}>{reason}</S.Reason>
    </S.Container>
  );
};

export default PreAbsenceListTextWrap;
