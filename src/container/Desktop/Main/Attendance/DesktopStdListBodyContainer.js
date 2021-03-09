import React from "react";
import { useSelector } from "react-redux";
import StdListBody from "../../../../component/Desktop/Molecules/Attendance/AttendanceStdList/AttendanceStdListBackground/StdListBody/StdListBody";
const DesktopStdListBodyContainer = () => {
  const attendanceLists = useSelector(
    state => state.dAttendance.attendanceData
  );

  return <StdListBody attendanceLists={attendanceLists} />;
};

export default DesktopStdListBodyContainer;
