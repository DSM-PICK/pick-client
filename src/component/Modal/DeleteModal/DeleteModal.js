import React, { useCallback } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { deletePreReportSaga } from "../../../module/action/pre_report";
import { getPreReportText } from "../../../lib/attendanceApi";
import Modal from "../Modal";
import { dropModal } from "../../../module/action/modal_wrap";

const DeleteModal = () => {
  const selectPreReportId = useSelector(
    state => state.preReport.selectedPreReportId
  );
  const preReportList = useSelector(state => state.preReport.preReportList);

  const dispatch = useDispatch();
  const ModalOff = useCallback(() => {
    dispatch(dropModal());
  }, [dispatch]);
  const onDelete = useCallback(() => {
    ModalOff();
    dispatch(deletePreReportSaga(selectPreReportId));
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
    } = preReportList.filter(data => data.id === selectPreReportId)[0];
    const textArr = [
      `${stdnum} ${name} : [${state}] `,
      ...getPreReportText(start_date, start_period, end_date, end_period)
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
