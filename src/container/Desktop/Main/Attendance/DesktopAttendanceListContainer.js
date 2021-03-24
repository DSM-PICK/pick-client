import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendanceList from "../../../../component/Desktop/Molecules/Attendance/AttendanceStdList/AttendanceStdListBackground/StdListGrid/AttendanceList/AttendanceList";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";

const DesktopAttendanceListContainer = props => {
  const { index, stdNum, stateList, css } = props;
  const attendanceData = useSelector(state => state.dAttendance.attendanceData);
  const { currentClassPriority } = useSelector(state => state.dAttendance);

  const cascadeState = ["귀가"];
  const periodArr = [10, 9, 8, 7]
    .slice(0, Object.values(stateList).filter(state => state).length)
    .reverse();

  const { putAttendanceStdDataSaga } = DAttendanceActionCreater;
  const dispatch = useDispatch();

  const putAttendanceStdData = useCallback(
    (numbers, periods, value, currentClassPriority) => {
      const cascadePeriod = ~cascadeState.findIndex(state => state === value)
        ? getCascadePeriod(periods)
        : periods;
      dispatch(
        putAttendanceStdDataSaga({
          numbers,
          periods: cascadePeriod,
          state: value,
          currentClassPriority
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

        putAttendanceStdData(
          selectedNumbers,
          period,
          value,
          currentClassPriority
        );
      } else {
        putAttendanceStdData(stdNum, period, value, currentClassPriority);
      }
    },
    [index, stdNum, attendanceData, currentClassPriority]
  );

  return (
    <AttendanceList
      css={css}
      index={index}
      onStateChange={onStateChange}
      stList={stateList}
    />
  );
};

export default React.memo(DesktopAttendanceListContainer);
