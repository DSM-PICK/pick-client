import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import AttendanceList from "../../../../component/Desktop/Molecules/Attendance/AttendanceStdList/AttendanceStdListBackground/StdListGrid/AttendanceList/AttendanceList";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";

const DesktopAttendanceListContainer = props => {
  const { name, stdNum, stateList, memo, css } = props;
  const [statesArr, setStatesArr] = useState(
    Object.values(stateList).filter(state => state)
  );

  const cascadeStates = ["귀가"];
  const startPeriod = 11 - statesArr.length;
  const periodArr = [10, 9, 8, 7].slice(0, statesArr.length).reverse();

  const { patchAttendanceStdDataSaga } = DAttendanceActionCreater;
  const dispatch = useDispatch();
  const patchAttendanceStdData = useCallback(
    (period, value) => {
      dispatch(
        patchAttendanceStdDataSaga({ number: stdNum, period, state: value })
      );
    },
    [dispatch, stdNum]
  );
  const onStateChange = (period, value) => {
    if (~cascadeStates.findIndex(state => state === value)) {
    } else {
      patchAttendanceStdData(period, value);
    }
  };

  return (
    <AttendanceList
      css={css}
      length={statesArr.length}
      stateList={statesArr}
      periodArr={periodArr}
      onStateChange={onStateChange}
    />
  );
};

export default DesktopAttendanceListContainer;
