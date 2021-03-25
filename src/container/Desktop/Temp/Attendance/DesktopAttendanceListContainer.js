import React, { useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import AttendanceList from "../../../../component/Desktop/Molecules/Temp/AttendanceStdList/AttendanceStdListBackground/StdListGrid/AttendanceList/AttendanceList";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";

const DesktopAttendanceListContainer = props => {
  const { index, stdNum, stateList, css } = props;
  const [statesArr, setStatesArr] = useState(
    Object.values(stateList).filter(state => state)
  );
  const { selectArr } = useSelector(state => state.dAttendance, shallowEqual);
  const attendanceData = useSelector(state => state.dAttendance.attendanceData);

  const startPeriod = 11 - statesArr.length;
  const periodArr = [10, 9, 8, 7].slice(0, statesArr.length).reverse();

  const {
    putAttendanceStdDataSaga,
    patchAttendanceStdDataSaga
  } = DAttendanceActionCreater;
  const dispatch = useDispatch();
  const putAttendanceStdData = useCallback(
    (numbers, periods, value) => {
      dispatch(putAttendanceStdDataSaga({ numbers, periods, state: value }));
    },
    [dispatch, stdNum]
  );
  const patchAttendanceStdData = useCallback(
    (period, value) => {
      dispatch(
        patchAttendanceStdDataSaga({ number: stdNum, period, state: value })
      );
    },
    [dispatch, stdNum]
  );

  const onStateChange = useCallback((period, value) => {
    // putAttendanceStdData(period, value);

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

export default React.memo(DesktopAttendanceListContainer);