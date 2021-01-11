import React from "react";
import * as S from "./styles";

const ItemBtn = props => {
  const { text } = props;

  return <S.Container>{text}</S.Container>;
};

export default ItemBtn;
