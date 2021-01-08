const SET_CURRENT_ATTENDANCE_INDEX_ARR =
  "d_attendance/SET_CURRENT_ATTENDANCE_INDEX_ARR";

const setCurrentAttendanceIndexArr = payload => ({
  type: SET_CURRENT_ATTENDANCE_INDEX_ARR,
  payload
});

export const DAttendanceAction = {
  SET_CURRENT_ATTENDANCE_INDEX_ARR
};

export const DAttendanceActionCreater = {
  setCurrentAttendanceIndexArr
};
