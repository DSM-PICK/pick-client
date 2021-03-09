import React from "react";
import { useSelector } from "react-redux";
import AttendanceCurrentBackground from "../../../../component/Desktop/Molecules/Attendance/AttendanceCurrent/AttendanceCurrentBackground/AttendanceCurrentBackground";

const DACurrentBackgroundContainer = () => {
  const data = useSelector(state => state.dAttendance);

  console.log(data);

  return <AttendanceCurrentBackground />;
};

export default DACurrentBackgroundContainer;
