import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import modalAction from "../../../module/action/modal";
import * as S from "./styles";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const modalRef = useRef();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const modalOff = useCallback((e) => {
    if (e.target.contains(modalRef.current))
      dispatch(modalAction.creater.modalOff());
  }, []);

  return (
    <>
      {isOpen ? (
        <S.Background onClick={modalOff}>
          <S.Modal ref={modalRef}>{children}</S.Modal>
        </S.Background>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
