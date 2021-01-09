import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectWrap from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlaceBackground/SelectWrap/SelectWrap";
import { getFloor } from "../../../../lib/attendanceApi";
import {
  DAttendanceAction,
  DAttendanceActionCreater
} from "../../../../module/action/d_attendance";

const DesktopSelectWrapContainer = () => {
  const dAttendance = useSelector(state => state.dAttendance);
  const {
    selectAttendanceArr: selectAttendance,
    currentAttendanceIndexArr: selectArrIndex
  } = dAttendance;
  const selectSchedule = useSelector(state => state.toggle.selectSchedule);

  const {
    getSelectAttendanceArrSaga,
    setCurrentAttendanceIndexArr
  } = DAttendanceActionCreater;

  const staticSelectArr = {
    selfStudy: {
      header: "학년",
      bodyItem: ["1학년", "2학년", "3학년", "기타"]
    },
    club: {
      header: "층",
      bodyItem: ["4층", "3층", "2층", "기타"]
    }
  };
  const selectSelfStudyOrClub =
    staticSelectArr[selectSchedule === "교실자습" ? "selfStudy" : "club"];
  const selectArr = [
    selectSelfStudyOrClub,
    {
      header: selectSchedule === "교실자습" ? "반" : "실",
      bodyItem: selectAttendance.map(data => data.location)
    }
  ];

  const dispatch = useDispatch();
  const getSelectAttendanceArr = useCallback(
    payload => {
      dispatch(getSelectAttendanceArrSaga(payload));
    },
    [dispatch]
  );
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

  console.log(getFloor(selectSelfStudyOrClub.bodyItem[selectArrIndex[0]]));
  console.log(selectSchedule === "교실자습" ? "self-study" : "club");

  useEffect(() => {
    getSelectAttendanceArr({
      schedule: selectSchedule === "교실자습" ? "self-study" : "club",
      floor: getFloor(selectSelfStudyOrClub.bodyItem[selectArrIndex[0]])
    });
  }, [selectSchedule, selectArrIndex]);

  return (
    <SelectWrap
      selectArr={selectArr}
      currentArr={selectArrIndex}
      onClick={setCurrentArrByIndex}
    />
  );
};

export default DesktopSelectWrapContainer;
