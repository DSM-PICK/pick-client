import React from "react";
import * as S from "./styles";

const AttendanceRowTop = props => {
  const { isSevenNull } = props;

  return (
    <S.Containter>
      <S.SectionSeq>번호</S.SectionSeq>
      <S.SectionStdNum>학번</S.SectionStdNum>
      <S.SectionName>이름</S.SectionName>
      <S.SectionClassWrap>
        {!isSevenNull && <S.SectionClass>7교시</S.SectionClass>}

        <S.SectionClass>8교시</S.SectionClass>
        <S.SectionClass>9교시</S.SectionClass>
        <S.SectionClass>10교시</S.SectionClass>
      </S.SectionClassWrap>
    </S.Containter>
  );
};

export default AttendanceRowTop;
