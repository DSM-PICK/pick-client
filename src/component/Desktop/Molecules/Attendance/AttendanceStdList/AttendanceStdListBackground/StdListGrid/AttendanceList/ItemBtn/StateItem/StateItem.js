import React from "react";
import * as S from "./styles";

const StateItem = props => {
  const { isOpen, current, value } = props;
  const { onClickItem } = props;

  return (
    <S.Container
      isOpen={isOpen}
      current={current}
      value={value}
      onClick={() => {
        onClickItem(value);
      }}
    >
      {value}
    </S.Container>
  );
};

export default StateItem;
