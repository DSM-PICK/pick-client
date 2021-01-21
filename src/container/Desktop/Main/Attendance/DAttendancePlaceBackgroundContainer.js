import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendancePlaceBackground from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlaceBackground/AttendancePlaceBackground";
import { getFloor } from "../../../../lib/attendanceApi";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";
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

  const payload = {
    schedule: selectSchedule === "교실자습" ? "self-study" : "club",
    floor: getFloor(selectSelfStudyOrClub.bodyItem[selectArrIndex[0]]),
    priority: selectPriority
  };

  const { getAttendanceStdDataSaga } = DAttendanceActionCreater;

  const dispatch = useDispatch();
  const getAttendanceStdData = useCallback(() => {
    dispatch(getAttendanceStdDataSaga(payload));
  }, [dispatch, payload]);

  useEffect(() => {
    dispatch(getAttendanceStdDataSaga({ ...payload, priority: 0 }));
  }, []);

  return <AttendancePlaceBackground onClick={getAttendanceStdData} />;
};

export default DAttendancePlaceBackgroundContainer;
