import React from "react";
import DSAttendanceListContainer from "../../../../../../../container/Desktop/Stats/DSAttendanceListContainer";
import * as S from "./styles";

const SStdListGrid = props => {
  const { index, name, stdNum, memo, css } = props;

  return (
    <S.Container>
      <S.StdName {...css}>{`${stdNum} ${name}`}</S.StdName>
      <DSAttendanceListContainer index={index} {...props} />
      {/* <S.StdMemo {...css}>{memo}</S.StdMemo> */}
    </S.Container>
  );
};

export default SStdListGrid;
