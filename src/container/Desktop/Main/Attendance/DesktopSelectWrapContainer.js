import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectWrap from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlaceBackground/SelectWrap/SelectWrap";
import { getFloor } from "../../../../lib/attendanceApi";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";
import { staticSelectArr } from "./StaticData";

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
      if (row === 0) {
        return [col, 0];
      }
      return selectArrIndex.map((current, index) => {
        return index === row ? col : current;
      });
    },
    [selectArrIndex]
  );

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
