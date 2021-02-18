export const SET_ATTENDANCE_CHANGE_STUDENT =
  "DESKTOP_REPORT/SET_ATTENDANCE_CHANGE_STUDENT";
export const SET_ATTENDANCE_CHANGE_TYPE =
  "DESKTOP_REPORT/SET_ATTENDANCE_CHANGE_TYPE";
export const SET_DESCRIPTION = "DESKTOP_REPORT/SET_DESCRIPTION";
export const SET_ATTENDANCE_CHANGE_LIST =
  "DESKTOP_REPORT/SET_ATTENDANCE_CHANGE_LIST";
export const GET_ATTENDANCE_CHANGE_LIST =
  "DESKTOP_REPORT/GET_ATTENDANCE_CHANGE_LIST";
export const DELETE_ATTENDANCE_CHANGE_STUDENT =
  "DESKTOP_REPORT/DELETE_ATTENDANCE_CHANGE_STUDENT";
export const SET_SELECTED_STUDENT = "DESKTOP_REPORT/SET_SELECTED_STUDENT";
export const SET_END_DATE = "DESKTOP_REPORT/SET_END_DATE";
export const SET_START_DATE = "DESKTOP_REPORT/SET_START_DATE";
export const SET_END_PERIOD = "DESKTOP_REPORT/SET_END_PERIOD";
export const SET_START_PERIOD = "DESKTOP_REPORT/SET_START_PERIOD";
export const ADD_ATTENDANCE_CHANGE_LIST =
  "DESKTOP_REPORT/ADD_ATTENDANCE_CHANGE_LIST";
export const GET_SIMILER_STUDENT = "DESKTOP_REPORT/GET_SIMILER_STUDENT";
export const SIMILER_STUDENT = "DESKTOP_REPORT/SIMILER_STUDENT";
export const SET_NEW_ATTENDANCE_CHANGE_STUDENT =
  "DESKTOP_REPORT/SET_NEW_ATTENDANCE_CHANGE_STUDENT";
export const SET_FIX_ATTENDANCE_CHANGE_STUDENT_STUDENT =
  "DESKTOP_REPORT/SET_FIX_ATTENDANCE_CHANGE_STUDENT_STUDENT";

export const setAttendanceChangeStudent = payload => ({
  type: SET_ATTENDANCE_CHANGE_STUDENT,
  payload
});

export const setAttendanceChangeType = payload => ({
  type: SET_ATTENDANCE_CHANGE_TYPE,
  payload
});

export const setDescription = payload => ({
  type: SET_DESCRIPTION,
  payload
});

export const getAttendanceChangeList = payload => ({
  type: GET_ATTENDANCE_CHANGE_LIST,
  payload
});

export const deleteAttendanceChangeStudent = payload => ({
  type: DELETE_ATTENDANCE_CHANGE_STUDENT,
  payload
});

export const setSelectedStudent = payload => ({
  type: SET_SELECTED_STUDENT,
  payload
});

export const setAttendanceChangeList = payload => ({
  type: SET_ATTENDANCE_CHANGE_LIST,
  payload
});

export const addAttendanceChangeList = payload => ({
  type: ADD_ATTENDANCE_CHANGE_LIST,
  payload
});

export const setStartDate = payload => ({
  type: SET_START_DATE,
  payload
});

export const setEndDate = payload => ({
  type: SET_END_DATE,
  payload
});

export const setStartPeriod = payload => ({
  type: SET_START_PERIOD,
  payload
});

export const setEndPeriod = payload => ({
  type: SET_END_PERIOD,
  payload
});

export const getSimilerStudent = payload => ({
  type: GET_SIMILER_STUDENT,
  payload
});

export const similerStudents = payload => ({
  type: SIMILER_STUDENT,
  payload
});

export const setNewAttendanceChangeStudent = payload => ({
  type: SET_NEW_ATTENDANCE_CHANGE_STUDENT,
  payload
});

export const setFixAttendanceChangeStudent = payload => ({
  type: SET_FIX_ATTENDANCE_CHANGE_STUDENT_STUDENT,
  payload
});
