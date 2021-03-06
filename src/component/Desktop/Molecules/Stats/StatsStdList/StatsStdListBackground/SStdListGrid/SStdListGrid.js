import React from "react";
import DesktopAttendanceListContainer from "../../../../../../../container/Desktop/Main/Attendance/DesktopAttendanceListContainer";
import * as S from "./styles";

const SStdListGrid = props => {
  const { index, name, stdNum, memo, css } = props;

  console.log(props);

  return (
    <S.Container>
      <S.StdName {...css}>{`${stdNum} ${name}`}</S.StdName>
      <DesktopAttendanceListContainer index={index} {...props} />
      {/* <S.StdMemo {...css}>{memo}</S.StdMemo> */}
    </S.Container>
  );
};

export default SStdListGrid;
