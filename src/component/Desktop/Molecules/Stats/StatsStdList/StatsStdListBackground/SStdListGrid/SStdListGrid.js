import React from "react";
import DSAttendanceListContainer from "../../../../../../../container/Desktop/Stats/DSAttendanceListContainer";
import * as S from "./styles";

const SStdListGrid = props => {
  const { index, name, stdNum, reason, css } = props;

  return (
    <S.Container>
      <S.StdName {...css}>{`${stdNum} ${name}`}</S.StdName>
      <DSAttendanceListContainer index={index} {...props} />
      <S.StdMemo {...css}>{reason}</S.StdMemo>
    </S.Container>
  );
};

export default SStdListGrid;
