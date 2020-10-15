import React, { useCallback } from "react";
import * as S from "./styles";
import ExName from "./ExName/ExName";
import PreReportModal from "../../PreReportDate/PreReportModal/PreReportModal";
import { useDispatch, useSelector } from "react-redux";
import {
  setAutoCompleteText,
  setText
} from "../../../../../module/action/auto_complete";

const NameSelect = () => {
  const names = useSelector(state => state.autoComplete.autoComplete);

  const dispatch = useDispatch();

  const onClickName = useCallback(
    payload => {
      dispatch(setText(payload));
      dispatch(setAutoCompleteText([]));
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
