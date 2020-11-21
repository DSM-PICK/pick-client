import React from "react";
import * as S from "./styles";

const Modal = props => {
  const { css } = props;

  const PreventModalOff = e => {
    e.stopPropagation();
  };

  return (
    <S.Container {...css} onClick={e => PreventModalOff(e)}>
      {props.children}
    </S.Container>
  );
};

export default Modal;
