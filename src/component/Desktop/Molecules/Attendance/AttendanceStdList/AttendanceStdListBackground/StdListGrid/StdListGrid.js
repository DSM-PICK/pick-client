import React from "react";
import DesktopAttendanceListContainer from "../../../../../../../container/Desktop/Main/Attendance/DesktopAttendanceListContainer";
import * as S from "./styles";

const StdListGrid = props => {
  const { index, name, stdNum, memo, css } = props;

  return (
    <S.Container>
      <S.StdName {...css}>{`${stdNum} ${name}`}</S.StdName>
      <DesktopAttendanceListContainer index={index} {...props} />
      {/* <S.StdMemo {...css}>{memo}</S.StdMemo> */}
    </S.Container>
  );
};

export default StdListGrid;
