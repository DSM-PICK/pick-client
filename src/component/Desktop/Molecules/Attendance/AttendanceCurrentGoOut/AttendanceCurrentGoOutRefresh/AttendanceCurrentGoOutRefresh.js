import React from "react";
import * as S from "./style";

const AttendanceCurrentGoOutRefresh = props => {
  const { RefreshBtn, onclickRefresh } = props;

  return (
    <S.Container>
      <S.RefreshButton img={RefreshBtn} onClick={onclickRefresh} />
    </S.Container>
  );
};

export default AttendanceCurrentGoOutRefresh;
