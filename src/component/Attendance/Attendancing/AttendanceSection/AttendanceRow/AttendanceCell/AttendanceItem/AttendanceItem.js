import React from "react";
import * as S from "./styles";

const AttendanceItem = props => {
  const { text, state, checkArr } = props;
  const { onClickItem } = props;

  return (
    <S.Container
      text={text}
      state={state}
      onClick={() => onClickItem(state, checkArr)}
    >
      {state}
    </S.Container>
  );
};

export default AttendanceItem;
