import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { Logout } from "../../../lib/requestApi";

const LogoutModal = props => {
  const { onModalClick } = props;

  const onNoModalClick = event => {
    event.stopPropagation();
  };

  const margin = isBrowser ? "5% 0 0 0" : "45% 0 0 0";

  return (
    <S.Container margin={margin} onClick={onModalClick}>
      <S.Modal onClick={event => onNoModalClick(event)}>
        <S.ModalText>로그아웃하시겠습니까?</S.ModalText>
        <S.ModalBtnWrap>
          <S.ModalCancle onClick={onModalClick}>취소</S.ModalCancle>
          <S.ModalOkay onClick={(onModalClick, Logout)} as={Link} to="/main">
            확인
          </S.ModalOkay>
        </S.ModalBtnWrap>
      </S.Modal>
    </S.Container>
  );
};

export default LogoutModal;
