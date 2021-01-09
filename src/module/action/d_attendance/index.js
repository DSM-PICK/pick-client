const SET_SELECT_ATTENDANCE_ARR = "d_attendance/SET_SELECT_ATTENDANCE_ARR";
const setSelectAttendanceArr = payload => ({
  type: SET_SELECT_ATTENDANCE_ARR,
  payload
});
const GET_SELECT_ATTENDANCE_ARR_SAGA =
  "d_attendance/GET_SELECT_ATTENDANCE_ARR_SAGA";

const SET_CURRENT_ATTENDANCE_INDEX_ARR =
  "d_attendance/SET_CURRENT_ATTENDANCE_INDEX_ARR";
const setCurrentAttendanceIndexArr = payload => ({
  type: SET_CURRENT_ATTENDANCE_INDEX_ARR,
  payload
});

export const DAttendanceAction = {
  SET_SELECT_ATTENDANCE_ARR,
  GET_SELECT_ATTENDANCE_ARR_SAGA,
  SET_CURRENT_ATTENDANCE_INDEX_ARR
};

export const DAttendanceActionCreater = {
  setSelectAttendanceArr,
  setCurrentAttendanceIndexArr
};
