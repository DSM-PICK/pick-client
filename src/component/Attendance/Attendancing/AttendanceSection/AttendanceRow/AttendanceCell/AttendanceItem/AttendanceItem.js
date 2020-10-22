import React from "react";
import * as S from "./styles";

const AttendanceItem = props => {
  const { state } = props;
  const { onClickItem } = props;

  return (
    <S.Container onClick={clickE => onClickItem(state.value, clickE)}>
      {state.value}
    </S.Container>
  );
};

export default AttendanceItem;
