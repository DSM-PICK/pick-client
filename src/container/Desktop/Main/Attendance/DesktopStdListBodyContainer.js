import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import StdListBody from "../../../../component/Desktop/Molecules/Attendance/AttendanceStdList/AttendanceStdListBackground/StdListBody/StdListBody";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";

const DesktopStdListBodyContainer = () => {
  const dispatch = useDispatch();
  const attendanceLists = useSelector(
    state => state.dAttendance.attendanceData,
    shallowEqual
  );

  const { setSelectArr } = DAttendanceActionCreater;
  useEffect(() => {
    const newSelectArr = Array.from(
      { length: attendanceLists ? attendanceLists.length : 0 },
      () => false
    );
    dispatch(setSelectArr(newSelectArr));
  }, [attendanceLists]);

  return <StdListBody attendanceLists={attendanceLists} />;
};

export default React.memo(DesktopStdListBodyContainer);
