import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendancePlaceBackground from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlaceBackground/AttendancePlaceBackground";
import { getFloor } from "../../../../lib/attendanceApi";
import { staticSelectArr } from "./StaticData";

const DAttendancePlaceBackgroundContainer = () => {
  const dAttendance = useSelector(state => state.dAttendance);
  const {
    selectAttendanceArr: selectAttendance,
    currentAttendanceIndexArr: selectArrIndex
  } = dAttendance;
  const selectSchedule = useSelector(state => state.toggle.selectSchedule);
  const selectSelfStudyOrClub =
    staticSelectArr[selectSchedule === "교실자습" ? "selfStudy" : "club"];
  const selectPriority = selectAttendance[selectArrIndex[1]]?.priority;

  const dispatch = useDispatch();

  // const a = useCallback(() => {
  //   dispatch();
  // }, [dispatch])

  console.log({
    schedule: selectSchedule === "교실자습" ? "self-study" : "club",
    floor: getFloor(selectSelfStudyOrClub.bodyItem[selectArrIndex[0]]),
    priority: selectPriority
  });

  return (
    <AttendancePlaceBackground onClick={() => console.log(selectPriority)} />
  );
};

export default DAttendancePlaceBackgroundContainer;
