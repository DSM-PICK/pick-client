import React from "react";
import AttendanceList from "./AttendanceList/AttendanceList";
import * as S from "./styles";

const StdListGrid = props => {
  const { name, stateList, memo, css } = props;

  return (
    <S.Container>
      <S.StdName {...css}>{name}</S.StdName>
      <AttendanceList {...css} stateList={stateList} />
      <S.StdMemo {...css}>{memo}</S.StdMemo>
    </S.Container>
  );
};

export default StdListGrid;
