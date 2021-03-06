import React from "react";
import { useSelector } from "react-redux";
import AttendanceClassInfo from "../../../../component/Desktop/Molecules/Attendance/AttendanceClassInfo/AttendanceClassInfo";

const DesktopAttendanceClassInfoContainer = () => {
  const classInfo = useSelector(state => state.dAttendance.classInfo);
  const todaySchedule = useSelector(state => state.schedule.todaySchedule);

  const scheduleArr = ["self-study", "after-school", "club"];
  const isNonSchedule = !~scheduleArr.findIndex(
    schedule => schedule === todaySchedule
  );

  const {
    managerTeacher,
    name: className,
    head,
    stdCount,
    stdCountWithoutEmployment
  } = classInfo;

  return (
    <AttendanceClassInfo
      managerTeacher={managerTeacher}
      className={className}
      head={head}
      stdCount={stdCount}
      isNonSchedule={isNonSchedule}
      stdCountWithoutEmployment={stdCountWithoutEmployment}
    />
  );
};

export default React.memo(DesktopAttendanceClassInfoContainer);
