import React, { useCallback } from "react";
import * as S from "./styles";
import ExName from "./ExName/ExName";
import { useDispatch, useSelector } from "react-redux";
import {
  setPreAbsenceAutoCompleteText,
  setPreAbsenceText
} from "../../../../../module/action/pre_absence";

const NameSelect = () => {
  const names = useSelector(state => state.preAbsence.autoComplete);

  const dispatch = useDispatch();

  const onClickName = useCallback(
    payload => {
      dispatch(setPreAbsenceText(payload));
      dispatch(setPreAbsenceAutoCompleteText([]));
    },
    [dispatch]
  );

  return (
    <S.Container names={names}>
      {names.length > 0 &&
        names.map(name => (
          <ExName key={name} name={name} onClickName={onClickName} />
        ))}
    </S.Container>
  );
};

export default NameSelect;
