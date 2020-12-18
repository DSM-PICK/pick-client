import React, { useCallback } from "react";
import * as S from "./styles";
import ExName from "./ExName/ExName";
import { useDispatch, useSelector } from "react-redux";
import {
  setPreReportAutoCompleteText,
  setPreReportText
} from "../../../../../module/action/pre_report";

const NameSelect = props => {
  const { selectedNameIndex } = props;
  const names = useSelector(state => state.preReport.autoComplete);

  const dispatch = useDispatch();

  const onClickName = useCallback(
    payload => {
      dispatch(setPreReportText(payload));
      dispatch(setPreReportAutoCompleteText([]));
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
