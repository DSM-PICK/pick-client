import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { deletePreAbsenceSaga } from "../../../module/action/pre_absence";
import { getPreAbsenceText } from "../../../lib/attendanceApi";

const DeleteModal = props => {
  const { curAbsenceId, preAbsenceList } = props;
  const { onOffDelModal, setCurAbsenceId } = props;

  const dispatch = useDispatch();

  const onDelete = useCallback(() => {
    onOffDelModal();
    setCurAbsenceId("");
    dispatch(deletePreAbsenceSaga(curAbsenceId));
  }, [dispatch]);

  const onCancle = useCallback(() => {
    setCurAbsenceId("");
    onOffDelModal();
  }, [curAbsenceId]);

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
      state,
      stdnum,
      start_date,
      start_period,
      end_date,
      end_period
    } = selectAbsenceData;
    const textArr = [
      `${stdnum} ${name} : [${state}] `,
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
    <S.Container onClick={onCancle}>
      <S.Modal onClick={event => onNoModalClick(event)}>
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
          <S.ModalCancle onClick={onCancle}>취소</S.ModalCancle>
          <S.ModalOkay onClick={onDelete} as={`div`}>
            삭제
          </S.ModalOkay>
        </S.ModalBtnWrap>
      </S.Modal>
    </S.Container>
  );
};

export default DeleteModal;
