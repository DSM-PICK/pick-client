const SET_SELECT_ATTENDANCE_ARR = "d_attendance/SET_SELECT_ATTENDANCE_ARR";
const setSelectAttendanceArr = payload => ({
  type: SET_SELECT_ATTENDANCE_ARR,
  payload
});
const GET_SELECT_ATTENDANCE_ARR_SAGA =
  "d_attendance/GET_SELECT_ATTENDANCE_ARR_SAGA";
const getSelectAttendanceArrSaga = payload => ({
  type: GET_SELECT_ATTENDANCE_ARR_SAGA,
  payload
});

const SET_CURRENT_ATTENDANCE_INDEX_ARR =
  "d_attendance/SET_CURRENT_ATTENDANCE_INDEX_ARR";
const setCurrentAttendanceIndexArr = payload => ({
  type: SET_CURRENT_ATTENDANCE_INDEX_ARR,
  payload
});

const SET_ATTENDANCE_STD_DATA = "d_attendance/SET_ATTENDANCE_STD_DATA";
const GET_ATTENDANCE_STD_DATA_SAGA =
  "d_attendance/GET_ATTENDANCE_STD_DATA_SAGA";

const setAttendanceStdData = payload => ({
  type: SET_ATTENDANCE_STD_DATA,
  payload
});
const setAttendanceStdDataSaga = payload => ({
  type: SET_ATTENDANCE_STD_DATA_SAGA,
  payload
});

export const DAttendanceAction = {
  SET_SELECT_ATTENDANCE_ARR,
  GET_SELECT_ATTENDANCE_ARR_SAGA,
  SET_CURRENT_ATTENDANCE_INDEX_ARR,
  SET_ATTENDANCE_STD_DATA,
  GET_ATTENDANCE_STD_DATA_SAGA
};

export const DAttendanceActionCreater = {
  setSelectAttendanceArr,
  getSelectAttendanceArrSaga,
  setCurrentAttendanceIndexArr,
  setAttendanceStdData,
  setAttendanceStdDataSaga
};
