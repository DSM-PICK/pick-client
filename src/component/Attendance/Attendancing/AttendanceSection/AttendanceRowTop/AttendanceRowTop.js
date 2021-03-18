import React from "react";
import * as S from "./styles";

const AttendanceRowTop = props => {
  const { isSevenNull, checkAllState, checkArrAll } = props;

  return (
    <S.Containter>
      <S.SectionCheckboxWrap>
        <S.SectionCheckbox
          type="checkbox"
          id={"attendance-checkbox"}
          checked={checkAllState}
          onClick={checkArrAll}
        />
        <S.SectionCheckboxLabel
          htmlFor={"attendance-checkbox"}
        ></S.SectionCheckboxLabel>
      </S.SectionCheckboxWrap>
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
