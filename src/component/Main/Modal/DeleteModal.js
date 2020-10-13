import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

const DeleteModal = props => {
  const { onOffDelModal } = props;

  const onNoModalClick = event => {
    event.stopPropagation();
  };

  return (
    <S.Container onClick={onOffDelModal}>
      <S.Modal onClick={event => onNoModalClick(event)}>
        <S.ModalText>삭제하시겠습니까?</S.ModalText>
        <S.ModalBtnWrap>
          <S.ModalCancle onClick={onOffDelModal}>취소</S.ModalCancle>
          <S.ModalOkay onClick={onOffDelModal} as={Link} to="/main">
            삭제
          </S.ModalOkay>
        </S.ModalBtnWrap>
      </S.Modal>
    </S.Container>
  );
};

export default DeleteModal;
