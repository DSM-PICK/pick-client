import React from "react";
import * as S from "./styles";

const StdListGrid = props => {
  const { name, attendanceList, memo } = props;

  return (
    <S.Container>
      <S.StdName>{name}</S.StdName>
      <S.AttendanceList>{attendanceList}</S.AttendanceList>
      <S.StdMemo>{memo}</S.StdMemo>
    </S.Container>
  );
};

export default StdListGrid;
