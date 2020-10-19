import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreAbsenceState } from "../../../../module/action/pre_absence";
import * as S from "./styles";

const PreReportState = props => {
  const { stateName } = props;

  const preReportState = useSelector(state => state.preAbsence.state);

  const dispatch = useDispatch();

  const setAbsenceState = useCallback(
    payload => dispatch(setPreAbsenceState(payload)),
    [dispatch]
  );

  return (
    <S.Container
      onClick={() => setAbsenceState(stateName)}
      stateName={stateName}
      preReportState={preReportState}
    >
      {stateName}
    </S.Container>
  );
};

export default PreReportState;
