import React, { useCallback } from "react";
import * as S from "./styles";
import NameSelect from "./NameSelect/NameSelect";
import { useDispatch, useSelector } from "react-redux";
import { getAutoCompleteTextSaga } from "../../../../module/action/auto_complete";
import { setPreAbsenceText } from "../../../../module/action/pre_absence";

const PreReportName = () => {
  const nameText = useSelector(state => state.preAbsence.text);

  const dispatch = useDispatch();

  const onChangeName = useCallback(
    e => {
      dispatch(setPreAbsenceText(e.target.value));
      dispatch(getAutoCompleteTextSaga(e.target.value));
    },
    [dispatch]
  );

  return (
    <S.Container>
      <S.Name value={nameText} onChange={e => onChangeName(e)} />
      <NameSelect />
    </S.Container>
  );
};

export default PreReportName;
