import React from "react";
import StdListBody from "./StdListBody/StdListBody";
import StdListHeader from "./StdListHeader/StdListHeader";
import * as S from "./styles";

const AttendanceStdListBackground = () => {
  return (
    <S.Container>
      <StdListHeader />
      <StdListBody />
    </S.Container>
  );
};

export default AttendanceStdListBackground;
