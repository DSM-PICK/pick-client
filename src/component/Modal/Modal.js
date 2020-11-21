import React from "react";
import * as S from "./styles";

const Modal = props => {
  const { css } = props;

  return <S.Container {...css}>{props.children}</S.Container>;
};

export default Modal;
