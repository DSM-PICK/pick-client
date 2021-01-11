import React from "react";
import * as S from "./styles";

const AttendanceList = props => {
  const { attendanceList, css } = props;

  return <S.Container {...css}></S.Container>;
};

export default AttendanceList;
