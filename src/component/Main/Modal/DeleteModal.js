import React, { useCallback } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { deletePreAbsenceSaga } from "../../../module/action/pre_absence";

const DeleteModal = props => {
  const { curPreAbsenceData } = props;
  const { onOffDelModal, setCurPreAbsenceData } = props;


  const dispatch = useDispatch();

  const onDelete = useCallback(() => {
      onOffDelModal();
      setCurPreAbsenceData("");
      dispatch(deletePreAbsenceSaga(curPreAbsenceData));
    },
    [dispatch]
  );

  const onNoModalClick = event => {
    event.stopPropagation();
  };

  return (
    <S.Container onClick={onOffDelModal}>
      <S.Modal onClick={event => onNoModalClick(event)}>
        <S.ModalText>삭제하시겠습니까?</S.ModalText>
        <S.ModalBtnWrap>
          <S.ModalCancle onClick={onOffDelModal}>취소</S.ModalCancle>
          <S.ModalOkay
            onClick={() => onDelete(curPreAbsenceData)}
            as={`div`}
          >
            삭제
          </S.ModalOkay>
        </S.ModalBtnWrap>
      </S.Modal>
    </S.Container>
  );
};

export default DeleteModal;
