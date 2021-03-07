import React from "react";
import * as S from "./styles";

const StatsList = props => {
  const { css, length, stateList } = props;

  return (
    <S.Container {...css} length={length}>
      {stateList.map((state, idx) => {
        return (
          <S.StateText key={idx} state={state}>
            {state}
          </S.StateText>
        );
      })}
    </S.Container>
  );
};

export default StatsList;
