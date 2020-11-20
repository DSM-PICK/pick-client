import React from "react";
import * as S from "./styles";

const AttendanceFloorWrap = props => {
  return (
    <S.Container>
      <S.Label>{props.text}</S.Label>
      {props.children}
    </S.Container>
  );
};

export default AttendanceFloorWrap;
