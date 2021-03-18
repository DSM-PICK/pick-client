import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendancePlace from "../../../../component/Desktop/Molecules/Attendance/AttendancePlace/AttendancePlace";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";
import { ToggleActionCreater } from "../../../../module/action/toggle";

const DesktopAttendancePlaceContainer = () => {
  const dAttendance = useSelector(state => state.dAttendance);
  const { currentAttendanceIndexArr: selectArrIndex } = dAttendance;
  const selectSchedule = useSelector(state => state.toggle.selectSchedule);

  const dispatch = useDispatch();

  const { setCurrentAttendanceIndexArr } = DAttendanceActionCreater;
  const setSelectSchedule = useCallback(
    schedule => {
      dispatch(ToggleActionCreater.setSelectSchedule(schedule));
    },
    [dispatch]
  );
  const setCurrentArrByIndex = useCallback(
    (row, col) => {
      dispatch(setCurrentAttendanceIndexArr(row, col));
    },
    [dispatch]
  );

  useEffect(() => {
    setCurrentArrByIndex([0, 0]);
  }, []);

  return (
    <AttendancePlace
      selectSchedule={selectSchedule}
      setSelectSchedule={setSelectSchedule}
    />
  );
};

export default DesktopAttendancePlaceContainer;
