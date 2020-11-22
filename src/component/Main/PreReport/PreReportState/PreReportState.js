import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreReportState } from "../../../../module/action/pre_report";
import * as S from "./styles";

const PreReportState = props => {
  const { stateName } = props;

  const preReportState = useSelector(state => state.preReport.state);

  const dispatch = useDispatch();

  const setReportState = useCallback(
    payload => dispatch(setPreReportState(payload)),
    [dispatch]
  );

  return (
    <S.Container
      onClick={() => setReportState(stateName)}
      stateName={stateName}
      preReportState={preReportState}
    >
      {stateName}
    </S.Container>
  );
};

export default PreReportState;
