import React from "react";
import * as S from "./styles";

const Input = props => {
  const { css, type } = props;

  return <S.Container {...css} type={props}></S.Container>;
};

export default Input;
