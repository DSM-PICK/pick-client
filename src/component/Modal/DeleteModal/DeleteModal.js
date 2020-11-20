import React, { useCallback } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { deletePreAbsenceSaga } from "../../../module/action/pre_absence";
import { getPreAbsenceText } from "../../../lib/attendanceApi";
import Modal from "../Modal";
import { dropModal } from "../../../module/action/modal_wrap";

const DeleteModal = () => {
  const selectPreAbsenceId = useSelector(
    state => state.preReport.selectedPreAbsenceId
  );
  const preAbsenceList = useSelector(state => state.preReport.preAbsenceList);

  const dispatch = useDispatch();
  const ModalOff = useCallback(() => {
    dispatch(dropModal());
  }, [dispatch]);
  const onDelete = useCallback(() => {
    ModalOff();
    dispatch(deletePreAbsenceSaga(selectPreAbsenceId));
  }, [dispatch]);

  const dataChangeText = () => {
    const {
      name,
      state,
      stdnum,
      start_date,
      start_period,
      end_date,
      end_period
    } = preAbsenceList.filter(data => data.id === selectPreAbsenceId)[0];
    const textArr = [
      `${stdnum} ${name} : [${state}] `,
      ...getPreAbsenceText(start_date, start_period, end_date, end_period)
    ];
    return textArr;
  };

  const MODAL_CSS = {
    width: "640px",
    background: "#ffffff",
    radius: "60px"
  };

  return (
    <Modal css={MODAL_CSS}>
      <S.ModalText>
        삭제하시겠습니까?
        <S.ModalSubText>
          {dataChangeText().map((text, index) =>
            !!index ? (
              <S.SecondSpan key={index}>{text}</S.SecondSpan>
            ) : (
              <S.FirstSpan key={index}>{text}</S.FirstSpan>
            )
          )}
        </S.ModalSubText>
      </S.ModalText>
      <S.ModalBtnWrap>
        <S.ModalCancle onClick={ModalOff}>취소</S.ModalCancle>
        <S.ModalOkay onClick={onDelete}>삭제</S.ModalOkay>
      </S.ModalBtnWrap>
    </Modal>
  );
};

export default DeleteModal;
