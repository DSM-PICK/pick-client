import React from "react";
import * as S from "./styles";

const StateItem = props => {
  const { current, value } = props;

  return (
    <S.Container current={current} value={value}>
      {value}
    </S.Container>
  );
};

export default StateItem;
