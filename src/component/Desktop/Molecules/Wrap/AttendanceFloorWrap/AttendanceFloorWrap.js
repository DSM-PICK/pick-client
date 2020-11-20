import React from "react";
import * as S from "./styles";

const AttendanceFloorWrap = props => {
  return (
    <S.Container>
      <S.Label>{props.text}</S.Label>
      <S.Wrap>{props.children}</S.Wrap>
    </S.Container>
  );
};

export default AttendanceFloorWrap;
