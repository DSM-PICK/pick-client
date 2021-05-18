import React from "react";
import * as S from "./styles";

const AttendanceItem = props => {
  const { text, state } = props;
  const { onClickItem } = props;

  return (
    <S.Container
      text={text}
      state={state}
      onClick={clickE => onClickItem(state, clickE)}
    >
      {state}
    </S.Container>
  );
};

export default AttendanceItem;
