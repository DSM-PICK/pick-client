import React from "react";
import * as S from "./styles";

const ModalWrap = props => {
  const { modalData } = props;
  const { ModalOff } = props;

  const { isShow, modalElement: Modal } = modalData;

  return (
    <>
      {isShow && (
        <S.Container>
          <S.Overlay onClick={ModalOff} />
          <Modal />
        </S.Container>
      )}
    </>
  );
};

export default ModalWrap;
