import React from "react";
import * as S from "./styles";

const StatsList = props => {
  const { css, length, stateList, memoList } = props;

  return (
    <S.Container {...css} length={length}>
      {stateList.map((state, idx) => {
        return (
          <S.StateText key={idx} state={state}>
            {state === "이동" && !!memoList[idx] ? memoList[idx] : state}
          </S.StateText>
        );
      })}
    </S.Container>
  );
};

export default StatsList;
