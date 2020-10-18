import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { deletePreAbsenceSaga } from "../../../module/action/pre_absence";
import { getPreAbsenceText } from "../../../lib/attendanceAPI";

const DeleteModal = props => {
  const { curAbsenceId, preAbsenceList } = props;
  const { onOffDelModal, setCurPreAbsenceData } = props;

  const dispatch = useDispatch();

  const onDelete = useCallback(() => {
    onOffDelModal();
    setCurPreAbsenceData("");
    dispatch(deletePreAbsenceSaga(curAbsenceId));
  }, [dispatch]);

  const [selectAbsenceData, setSelectAbsenceData] = useState({
    end_date: "",
    end_period: "",
    id: "",
    name: "",
    start_date: "",
    start_period: "",
    state: "",
    stdnum: ""
  });

  const onNoModalClick = event => {
    event.stopPropagation();
  };

  const dataChangeText = () => {
    const {
      name,
      stdnum,
      start_date,
      start_period,
      end_date,
      end_period
    } = selectAbsenceData;
    const textArr = [
      `${stdnum} ${name}`,
      ...getPreAbsenceText(start_date, start_period, end_date, end_period)
    ];
    return textArr;
  };

  useEffect(() => {
    setSelectAbsenceData(
      ...preAbsenceList.filter(data => data.id === curAbsenceId)
    );
  }, []);

  return (
    <S.Container onClick={onOffDelModal}>
      <S.Modal onClick={event => onNoModalClick(event)}>
        <S.ModalText>삭제하시겠습니까?</S.ModalText>
        <S.ModalSubText>{dataChangeText().map(text => text)}</S.ModalSubText>
        <S.ModalBtnWrap>
          <S.ModalCancle onClick={onOffDelModal}>취소</S.ModalCancle>
          <S.ModalOkay onClick={() => onDelete(curPreAbsenceData)} as={`div`}>
            삭제
          </S.ModalOkay>
        </S.ModalBtnWrap>
      </S.Modal>
    </S.Container>
  );
};

export default DeleteModal;
