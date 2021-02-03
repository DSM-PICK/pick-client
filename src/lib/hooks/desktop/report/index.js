import { useDispatch, useSelector } from "react-redux";
import {
  deleteAttendanceChangeStudent,
  getAttendanceChangeList,
  setAttendanceChangeType,
  setDescription,
  setSelectedDate,
  setSelectedStudent
} from "../../../../module/action/deskop/report";
import { getAttendanceChangeProxy } from "./proxy";

export const useDesktopReportState = () => {
  const dispatch = useDispatch();
  const {
    attendanceChangeStudentList,
    attendanceChangeList,
    selectedDate,
    selectedStudent
  } = useSelector(state => state.desktopReport);
  const state = {
    attendanceChangeType: getAttendanceChangeProxy(
      attendanceChangeStudentList,
      "type"
    )[selectedStudent],
    description: getAttendanceChangeProxy(
      attendanceChangeStudentList,
      "description"
    )[selectedStudent],
    attendanceChangeStudentList,
    selectedDate,
    selectedStudent,
    attendanceChangeList
  };
  const setState = {
    setSelectedDate: payload => dispatch(setSelectedDate(payload)),
    setAttendanceChangeStudent: payload =>
      dispatch(setAttendanceChangeStudent(payload)),
    setAttendanceChangeType: data => {
      dispatch(setAttendanceChangeType({ id: selectedStudent, data }));
    },
    setDescription: data =>
      dispatch(setDescription({ id: selectedStudent, data })),
    getAttendanceChangeList: payload =>
      dispatch(getAttendanceChangeList(payload)),
    deleteAttendanceChangeStudent: payload =>
      dispatch(deleteAttendanceChangeStudent(payload)),
    setSelectedStudent: payload => dispatch(setSelectedStudent(payload))
  };
  return {
    state,
    setState
  };
};
