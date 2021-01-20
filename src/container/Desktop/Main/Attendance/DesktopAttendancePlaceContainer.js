import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendancePlace from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlace";
import { ToggleActionCreater } from "../../../../module/action/toggle";

const DesktopAttendancePlaceContainer =   () => {
  const selectSchedule = useSelector(state => state.toggle.selectSchedule);

  const dispatch = useDispatch();

  const setSelectSchedule = useCallback(
    schedule => {
      dispatch(ToggleActionCreater.setSelectSchedule(schedule));
    },
    [dispatch]
  );

  return (
    <AttendancePlace
      selectSchedule={selectSchedule}
      setSelectSchedule={setSelectSchedule}
    />
  );
};

export default DesktopAttendancePlaceContainer;
