import React from "react";
import * as S from "./style";

const AttendanceCurrentGoOutRefresh = props => {
  const { RefreshBtn } = props;

  return (
    <S.Container>
      <S.RefreshButton img={RefreshBtn}></S.RefreshButton>
    </S.Container>
  );
};

export default AttendanceCurrentGoOutRefresh;
