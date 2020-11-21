import React, { useCallback } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import Modal from "../Modal";
import { dropModal } from "../../../module/action/modal_wrap";
import { Logout } from "../../../lib/requestApi";

const LogoutModal = () => {
  const dispatch = useDispatch();
  const ModalOff = useCallback(() => {
    dispatch(dropModal());
  }, [dispatch]);

  const LogoutClick = () => {
    ModalOff();
    Logout();
  };

  const MODAL_CSS = {
    width: "640px",
    radius: "60px",
    background: "#FFFFFF"
  };

  return (
    <Modal css={MODAL_CSS}>
      <S.ModalText>로그아웃하시겠습니까?</S.ModalText>
      <S.ModalBtnWrap>
        <S.ModalCancle onClick={ModalOff}>취소</S.ModalCancle>
        <S.ModalOkay onClick={LogoutClick}>확인</S.ModalOkay>
      </S.ModalBtnWrap>
    </Modal>
  );
};

export default LogoutModal;
