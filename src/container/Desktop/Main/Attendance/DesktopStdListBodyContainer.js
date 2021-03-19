import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import StdListBody from "../../../../component/Desktop/Molecules/Attendance/AttendanceStdList/AttendanceStdListBackground/StdListBody/StdListBody";
const DesktopStdListBodyContainer = () => {
  const attendanceLists = useSelector(
    state => state.dAttendance.attendanceData,
    shallowEqual
  );
  const selectArr = useSelector(
    state => state.dAttendance.selectArr,
    shallowEqual
  );

  console.log(attendanceLists, selectArr);

  return <StdListBody attendanceLists={attendanceLists} />;
};

export default React.memo(DesktopStdListBodyContainer);
