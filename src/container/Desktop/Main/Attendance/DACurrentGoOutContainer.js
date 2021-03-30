import React, { useEffect } from "react";
import AttendanceCurrentGoOut from "../../../../component/Desktop/Molecules/Attendance/AttendanceCurrentGoOut/AttendanceCurrentGoOut";
import { useDispatch, useSelector } from "react-redux";
import { DAttendanceActionCreater } from "../../../../module/action/d_attendance";

const DACurrentGoOutContainer = () => {
  const dispatch = useDispatch();
  const schedule = useSelector(state => state.toggle.selectSchedule);

  const { getStudentByStateSaga } = DAttendanceActionCreater;

  const studentState = "외출";

  const onclickRefresh = () => {
    dispatch(getStudentByStateSaga({ schedule, studentState }));
  };

  useEffect(() => {
    dispatch(getStudentByStateSaga({ schedule, studentState }));
  }, [schedule]);

  return <AttendanceCurrentGoOut onclickRefresh={onclickRefresh} />;
};

export default DACurrentGoOutContainer;
