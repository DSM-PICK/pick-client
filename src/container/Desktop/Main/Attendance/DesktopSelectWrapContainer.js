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
  const selectSchedule = useSelector(state => state.toggle.selectSchedule);

  const { setCurrentAttendanceIndexArr } = DAttendanceActionCreater;

  const staticSelectArr = {
    class: {
      header: "학년",
      bodyItem: ["1학년", "2학년", "3학년", "기타"]
    },
    club: {
      header: "층",
      bodyItem: ["4층", "3층", "2층", "기타"]
    }
  };

  const selectArr = [
    staticSelectArr[selectSchedule === "교실자습" ? "class" : "club"],
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
      return selectArrIndex.map((current, index) => {
        // if (index === 1) {
        //   return index === row
        //     ? col
        //     : Math.min(current, selectArr[index].bodyItem.length - 1);
        // } else {
        return index === row ? col : current;
        // }
      });
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
