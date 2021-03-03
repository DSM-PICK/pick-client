import React from "react";
import { useSelector } from "react-redux";
import AttendanceClassInfo from "../../../../component/Desktop/Molecules/Attendance/AttendanceClassInfo/AttendanceClassInfo";

const DesktopAttendanceClassInfoContainer = () => {
  const classInfo = useSelector(state => state.dAttendance.classInfo);

  const {
    name: className,
    head,
    stdCount,
    stdCountWithoutEmployment
  } = classInfo;

  return (
    <AttendanceClassInfo
      className={className}
      head={head}
      stdCount={stdCount}
      stdCountWithoutEmployment={stdCountWithoutEmployment}
    />
  );
};

export default DesktopAttendanceClassInfoContainer;