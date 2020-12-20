import React from "react";
import * as S from "./styles";

const ExName = props => {
  const { name, isSelected } = props;
  const { onClickName } = props;

  isSelected && console.log(name);

  return (
    <S.Container isSelected={isSelected} onClick={() => onClickName(name)}>
      {name}
    </S.Container>
  );
};

export default ExName;
