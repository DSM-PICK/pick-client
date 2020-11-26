import React from "react";
import * as S from "./styles";

const AttendanceStatsButton = props => {
  const { text } = props.data;
  return <S.Container>{text}</S.Container>;
};

export default AttendanceStatsButton;
