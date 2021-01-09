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
const SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA =
  "d_attendance/SUC_GET_SELECT_ATTENDANCE_ARR_SAGA";
const successGetSelectAttendanceArrSaga = payload => ({
  type: SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA,
  payload
});
const FAILURE_GET_SELECT_ATTENDANCE_ARR_SAGA =
  "d_attendance/GET_SELECT_ATTENDANCE_ARR_SAGA";
const failureGetSelectAttendanceArrSaga = payload => ({
  type: FAILURE_GET_SELECT_ATTENDANCE_ARR_SAGA,
  payload
});

const SET_CURRENT_ATTENDANCE_INDEX_ARR =
  "d_attendance/SET_CURRENT_ATTENDANCE_INDEX_ARR";
const setCurrentAttendanceIndexArr = payload => ({
  type: SET_CURRENT_ATTENDANCE_INDEX_ARR,
  payload
});

const SET_ATTENDANCE_STD_DATA = "d_attendance/SET_ATTENDANCE_STD_DATA";
const setAttendanceStdData = payload => ({
  type: SET_ATTENDANCE_STD_DATA,
  payload
});
const GET_ATTENDANCE_STD_DATA_SAGA =
  "d_attendance/GET_ATTENDANCE_STD_DATA_SAGA";
const getAttendanceStdDataSaga = payload => ({
  type: GET_ATTENDANCE_STD_DATA_SAGA,
  payload
});
const SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA =
  "d_attendance/GET_ATTENDANCE_STD_DATA_SAGA";
const successGetAttendanceStdDataSaga = payload => ({
  type: SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA,
  payload
});
const FAILURE_GET_ATTENDANCE_STD_DATA_SAGA =
  "d_attendance/GET_ATTENDANCE_STD_DATA_SAGA";
const failureGetAttendanceStdDataSaga = payload => ({
  type: FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
  payload
});

export const DAttendanceAction = {
  SET_SELECT_ATTENDANCE_ARR,
  GET_SELECT_ATTENDANCE_ARR_SAGA,
  SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA,
  FAILURE_GET_SELECT_ATTENDANCE_ARR_SAGA,
  SET_CURRENT_ATTENDANCE_INDEX_ARR,
  SET_ATTENDANCE_STD_DATA,
  GET_ATTENDANCE_STD_DATA_SAGA,
  SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA,
  FAILURE_GET_ATTENDANCE_STD_DATA_SAGA
};

export const DAttendanceActionCreater = {
  setSelectAttendanceArr,
  getSelectAttendanceArrSaga,
  successGetSelectAttendanceArrSaga,
  failureGetSelectAttendanceArrSaga,
  setCurrentAttendanceIndexArr,
  setAttendanceStdData,
  getAttendanceStdDataSaga,
  successGetAttendanceStdDataSaga,
  failureGetAttendanceStdDataSaga
};
