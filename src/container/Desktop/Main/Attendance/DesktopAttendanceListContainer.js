import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import AttendanceList from "../../../../component/Desktop/Molecules/Attendance/AttendanceStdList/AttendanceStdListBackground/StdListGrid/AttendanceList/AttendanceList";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";

const DesktopAttendanceListContainer = props => {
  const { index, stdNum, stateList, css } = props;
  const [statesArr, setStatesArr] = useState(
    Object.values(stateList).filter(state => state)
  );

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
  const onStateChange = useCallback((period, value) => {
    patchAttendanceStdData(period, value);
    viewChange(period, value);
  }, []);

  const viewChange = useCallback(
    (period, value) => {
      setStatesArr(
        statesArr.map((state, index) => {
          if (index === period - startPeriod) {
            return value;
          }
          return state;
        })
      );
    },
    [statesArr]
  );

  return (
    <AttendanceList
      css={css}
      index={index}
      length={statesArr.length}
      stateList={statesArr}
      periodArr={periodArr}
      onStateChange={onStateChange}
    />
  );
};

export default DesktopAttendanceListContainer;
