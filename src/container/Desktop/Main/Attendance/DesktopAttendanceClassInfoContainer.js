import React from "react";
import AttendanceClassInfo from "../../../../component/Desktop/Molecules/Attendance/AttendanceClassInfo/AttendanceClassInfo";

const DesktopAttendanceClassInfoContainer = () => {
  const className = "2학년 2반";
  const teacherName = "신요셉";
  const allStdCnt = 20;
  const attendanceStdCnt = 18;

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
