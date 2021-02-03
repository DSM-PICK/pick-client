export const SET_SELECTED_DATE = "DESKTOP_REPORT/SET_SELECTED_DATE";
export const SET_ATTENDANCE_CHANGE_STUDENT =
  "DESKTOP_REPORT/SET_ATTENDANCE_CHANGE_STUDENT";
export const SET_ATTENDANCE_CHANGE_TYPE =
  "DESKTOP_REPORT/SET_ATTENDANCE_CHANGE_TYPE";
export const SET_DESCRIPTION = "DESKTOP_REPORT/SET_DESCRIPTION";
export const GET_ATTENDANCE_CHANGE_LIST =
  "DESKTOP_REPORT/GET_ATTENDANCE_CHANGE_LIST";
export const DELETE_ATTENDANCE_CHANGE_STUDENT =
  "DESKTOP_REPORT/DELETE_ATTENDANCE_CHANGE_STUDENT";
export const SET_SELECTED_STUDENT = "DESKTOP_REPORT/SET_SELECTED_STUDENT";
export const GET_ATTENDANCE_CHANGE_STUDENT =
  "DESKTOP_REPORT/GET_SELECTED_STUDENT";
export const setSelectedDate = payload => ({
  type: SET_SELECTED_DATE,
  payload
});

export const setAttendanceChangeSudent = payload => ({
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
