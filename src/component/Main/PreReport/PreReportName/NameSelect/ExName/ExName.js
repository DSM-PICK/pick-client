import React from "react";
import * as S from "./styles";

const ExName = props => {
  const { name } = props;
  const { onClickName } = props;

  return <S.Container onClick={() => onClickName(name)}>{name}</S.Container>;
};

export default ExName;
