import React from "react";
import { useSelector } from "react-redux";
import AttendanceClassInfo from "../../../../component/Desktop/Molecules/Attendance/AttendanceClassInfo/AttendanceClassInfo";

const DesktopAttendanceClassInfoContainer = () => {
  const attendanceData = useSelector(state => state.dAttendance.attendanceData);
  const dAttendanceData = useSelector(state => state.dAttendance);

  const className = "2학년 4반";
  const teacherName = localStorage.getItem("teacherName");
  const allStdCnt = attendanceData.length;
  const attendanceStdCnt =
    attendanceData.length > 0 &&
    attendanceData.filter(data => data.state.eight !== "취업").length;

  console.log({ attendanceData });

  return (
    <AttendanceClassInfo
      className={className}
      teacherName={teacherName}
      allStdCnt={allStdCnt}
      attendanceStdCnt={attendanceStdCnt}
    />
  );
};

export default DesktopAttendanceClassInfoContainer;
