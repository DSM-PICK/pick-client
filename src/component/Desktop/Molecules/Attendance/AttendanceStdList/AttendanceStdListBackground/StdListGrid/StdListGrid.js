import React from "react";
import DesktopAttendanceListContainer from "../../../../../../../container/Desktop/Main/Attendance/DesktopAttendanceListContainer";
import * as S from "./styles";

const StdListGrid = props => {
  const { name, stdNum, memo, css } = props;

  return (
    <S.Container>
      <S.StdName {...css}>{`${stdNum} ${name}`}</S.StdName>
      <DesktopAttendanceListContainer {...props} />
      <S.StdMemo {...css}>{memo}</S.StdMemo>
    </S.Container>
  );
};

export default StdListGrid;
