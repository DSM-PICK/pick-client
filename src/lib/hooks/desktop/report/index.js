import { useDispatch, useSelector } from "react-redux";
import {
  addAttendanceChangeList,
  deleteAttendanceChangeStudent,
  getAttendanceChangeList,
  setAttendanceChangeType,
  setDescription,
  setSelectedStudent,
  setEndDate,
  setStartDate,
  setEndPeriod,
  setStartPeriod,
  getSimilerStudent,
  setNewAttendanceChangeStudent,
  setFixAttendanceChangeStudent
} from "../../../../module/action/deskop/report";
import { getAttendanceChangeProxy } from "./proxy";

export const useDesktopReportState = () => {
  const dispatch = useDispatch();
  const {
    attendanceChangeStudentList,
    attendanceChangeList,
    selectedStudent,
    similerStudents
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
    selectedStudent,
    attendanceChangeList,
    startDate: getAttendanceChangeProxy(
      attendanceChangeStudentList,
      "startDate"
    )[selectedStudent],
    endDate: getAttendanceChangeProxy(attendanceChangeStudentList, "endDate")[
      selectedStudent
    ],
    startPeriod: getAttendanceChangeProxy(
      attendanceChangeStudentList,
      "startPeriod"
    )[selectedStudent],
    endPeriod: getAttendanceChangeProxy(
      attendanceChangeStudentList,
      "endPeriod"
    )[selectedStudent],
    similerStudents
  };
  const setState = {
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
    setSelectedStudent: payload => dispatch(setSelectedStudent(payload)),
    addAttendanceChangeList: payload =>
      dispatch(addAttendanceChangeList(payload)),
    setStartDate: payload => dispatch(setStartDate(payload)),
    setEndDate: payload => dispatch(setEndDate(payload)),
    setStartPeriod: payload => dispatch(setStartPeriod(payload)),
    setEndPeriod: payload => dispatch(setEndPeriod(payload)),
    getSimilerStudent: payload => dispatch(getSimilerStudent(payload)),
    setNewAttendanceChangeStudent: payload =>
      dispatch(setNewAttendanceChangeStudent(payload)),
    setFixAttendanceChangeStudent: payload =>
      dispatch(setFixAttendanceChangeStudent(payload))
  };
  return {
    state,
    setState
  };
};
