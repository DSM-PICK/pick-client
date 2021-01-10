import React from "react";
import * as S from "./styles";

const StdListGrid = props => {
  const { name, attendanceList, memo, css } = props;

  return (
    <S.Container>
      <S.StdName {...css}>{name}</S.StdName>
      <S.AttendanceList {...css}>{attendanceList}</S.AttendanceList>
      <S.StdMemo {...css}>{memo}</S.StdMemo>
    </S.Container>
  );
};

export default StdListGrid;
