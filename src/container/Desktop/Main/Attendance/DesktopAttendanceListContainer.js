import React, { useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import AttendanceList from "../../../../component/Desktop/Molecules/Attendance/AttendanceStdList/AttendanceStdListBackground/StdListGrid/AttendanceList/AttendanceList";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";

const DesktopAttendanceListContainer = props => {
  const { index, stdNum, stateList, css } = props;
  const [statesArr, setStatesArr] = useState(
    Object.values(stateList).filter(state => state)
  );
  const attendanceData = useSelector(state => state.dAttendance.attendanceData);

  const cascadeState = ["귀가"];
  const startPeriod = 11 - statesArr.length;
  const periodArr = [10, 9, 8, 7].slice(0, statesArr.length).reverse();

  const {
    putAttendanceStdDataSaga,
    patchAttendanceStdDataSaga
  } = DAttendanceActionCreater;
  const dispatch = useDispatch();

  const putAttendanceStdData = useCallback(
    (numbers, periods, value) => {
      const cascadePeriod = ~cascadeState.findIndex(state => state === value)
        ? getCascadePeriod(periods)
        : periods;
      dispatch(
        putAttendanceStdDataSaga({
          numbers,
          periods: cascadePeriod,
          state: value
        })
      );
    },
    [dispatch, stdNum]
  );
  const getCascadePeriod = useCallback(periods => {
    return periodArr
      .reverse()
      .filter(p => p >= periods)
      .reverse();
  }, []);
  const patchAttendanceStdData = useCallback(
    (period, value) => {
      dispatch(
        patchAttendanceStdDataSaga({ number: stdNum, period, state: value })
      );
    },
    [dispatch, stdNum]
  );
  const onStateChange = useCallback(
    (period, value, selectArr) => {
      if (selectArr[index]) {
        const selectedNumbers = attendanceData
          .filter(
            (_, filterIndex) =>
              ~selectArr
                .map((data, mapIndex) => (data ? mapIndex : null))
                .filter(_ => _ !== null)
                .findIndex(fIndex => fIndex === filterIndex)
          )
          .map(std => std.gradeClassNumber);

        putAttendanceStdData(selectedNumbers, period, value);
      } else {
        patchAttendanceStdData(period, value);
        viewChange(period, value);
      }
    },
    [index, attendanceData]
  );

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
