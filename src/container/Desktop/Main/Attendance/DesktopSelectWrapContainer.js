import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectWrap from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlaceBackground/SelectWrap/SelectWrap";
import {
  DAttendanceAction,
  DAttendanceActionCreater
} from "../../../../module/action/d_attendance";

const DesktopSelectWrapContainer = () => {
  const selectArrIndex = useSelector(
    state => state.dAttendance.currentAttendanceIndexArr
  );

  const { setCurrentAttendanceIndexArr } = DAttendanceActionCreater;

  const selectArr = [
    {
      header: "학년",
      bodyItem: ["1학년", "2학년", "3학년", "기타"]
    },
    {
      header: "반",
      bodyItem: ["1반", "2반", "3반", "4반"]
    }
  ];

  const dispatch = useDispatch();

  const setCurrentArrByIndex = useCallback(
    (row, col) => {
      dispatch(setCurrentAttendanceIndexArr(getUpdatedArr(row, col)));
    },
    [dispatch, selectArrIndex]
  );
  const getUpdatedArr = useCallback(
    (row, col) => {
      return selectArrIndex.map((current, index) =>
        index === row ? col : current
      );
    },
    [selectArrIndex]
  );

  return (
    <SelectWrap
      selectArr={selectArr}
      currentArr={selectArrIndex}
      onClick={setCurrentArrByIndex}
    />
  );
};

export default DesktopSelectWrapContainer;
