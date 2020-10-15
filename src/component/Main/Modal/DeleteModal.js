import React, { useCallback } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePreAbsenceSaga } from "../../../module/action/pre_absence";

const DeleteModal = props => {
  const { curPreAbsenceData } = props;
  const { onOffDelModal, setCurPreAbsenceData } = props;

  const onNoModalClick = event => {
    event.stopPropagation();
  };

  console.log(`curPreAbsenceData`);
  console.log(curPreAbsenceData);

  const dispatch = useDispatch();

  const onDelete = useCallback(
    curPreAbsenceData => {
      console.log(`onDelete`);
      console.log(curPreAbsenceData);
      onOffDelModal();
      setCurPreAbsenceData("");
      dispatch(deletePreAbsenceSaga(curPreAbsenceData));
    },
    [dispatch]
  );

  return (
    <S.Container onClick={onOffDelModal}>
      <S.Modal onClick={event => onNoModalClick(event)}>
        <S.ModalText>삭제하시겠습니까?</S.ModalText>
        <S.ModalBtnWrap>
          <S.ModalCancle onClick={onOffDelModal}>취소</S.ModalCancle>
          <S.ModalOkay
            onClick={() => onDelete(curPreAbsenceData)}
            as={Link}
            to="/main"
          >
            삭제
          </S.ModalOkay>
        </S.ModalBtnWrap>
      </S.Modal>
    </S.Container>
  );
};

export default DeleteModal;
