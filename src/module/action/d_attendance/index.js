const SET_CLASS_INFO = "d_attendance/SET_CLASS_INFO";
const setClassInfo = payload => ({
  type: SET_CLASS_INFO,
  payload
});

const SET_FLOOR_DATA = "d_attendance/SET_FLOOR_DATA";
const setFloorData = payload => ({
  type: SET_FLOOR_DATA,
  payload
});
const GET_FLOOR_DATA_SAGA = "d_attendance/GET_FLOOR_DATA_SAGA";
const getFloorDataSaga = payload => ({
  type: GET_FLOOR_DATA_SAGA,
  payload
});

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
  "d_attendance/SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA";
const successGetSelectAttendanceArrSaga = payload => ({
  type: SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA,
  payload
});
const FAILURE_GET_SELECT_ATTENDANCE_ARR_SAGA =
  "d_attendance/FAILURE_GET_SELECT_ATTENDANCE_ARR_SAGA";
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

const SET_SELECT_ARR_WITH_DISABLE = "d_attendance/SET_SELECT_ARR_WITH_DISABLE";
const setSelectArrWithDisable = payload => ({
  type: SET_SELECT_ARR_WITH_DISABLE,
  payload
});

const SET_SELECT_ARR = "d_attendance/SET_SELECT_ARR";
const setSelectArr = payload => ({
  type: SET_SELECT_ARR,
  payload
});

const SET_SELECT_ALL = "d_attendance/SET_SELECT_ALL";
const setSelectAll = payload => ({
  type: SET_SELECT_ALL,
  payload
});

const SET_MANAGED_INFO = "d_attendance/SET_MANAGED_INFO";
const setManagedInfo = payload => ({
  type: SET_MANAGED_INFO,
  payload
});

const SET_MANAGED_CLASS_FLOOR_DATA =
  "d_attendance/SET_MANAGED_CLASS_FLOOR_DATA";
const setManagedClassFloorData = payload => ({
  type: SET_MANAGED_CLASS_FLOOR_DATA,
  payload
});
const SET_MANAGED_CLUB_FLOOR_DATA = "d_attendance/SET_MANAGED_CLUB_FLOOR_DATA";
const setManagedClubFloorData = payload => ({
  type: SET_MANAGED_CLUB_FLOOR_DATA,
  payload
});

const SET_IS_FAST_CLICK = "d_attendance/SET_IS_FAST_CLICK";
const setIsFastClick = payload => ({
  type: SET_IS_FAST_CLICK,
  payload
});

const SET_FIRST_SCHEDULE_ATTENDANCE_ARR =
  "d_attendance/SET_FIRST_SCHEDULE_ATTENDANCE_ARR";
const setFirstScheduleAttendanceArr = payload => ({
  type: SET_FIRST_SCHEDULE_ATTENDANCE_ARR,
  payload
});

const SET_CURRENT_CLASS_PRIORITY = "d_attendance/SET_CURRENT_CLASS_PRIORITY";
const setCurrentClassPriority = payload => ({
  type: SET_CURRENT_CLASS_PRIORITY,
  payload
});

const SET_MEMO_FLOOR_DATA = "d_attendance/SET_MEMO_FLOOR_DATA";
const setMemoFloorData = payload => ({
  type: SET_MEMO_FLOOR_DATA,
  payload
});

const SET_FLOOR_CLASS_DATA = "d_attendance/SET_FLOOR_CLASS_DATA";
const setFloorClassData = payload => ({
  type: SET_FLOOR_CLASS_DATA,
  setFloorClassData
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
  "d_attendance/SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA";
const successGetAttendanceStdDataSaga = payload => ({
  type: SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA,
  payload
});
const FAILURE_GET_ATTENDANCE_STD_DATA_SAGA =
  "d_attendance/FAILURE_GET_ATTENDANCE_STD_DATA_SAGA";
const failureGetAttendanceStdDataSaga = payload => ({
  type: FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
  payload
});

const PATCH_ATTENDANCE_STD_DATA_SAGA =
  "d_attendance/PATCH_ATTENDANCE_STD_DATA_SAGA";
const patchAttendanceStdDataSaga = payload => ({
  type: PATCH_ATTENDANCE_STD_DATA_SAGA,
  payload
});
const PATCH_AND_GET_STD_DATA_SAGA = "d_attendance/PATCH_AND_GET_STD_DATA_SAGA";
const patchAndGetStdDataSaga = payload => ({
  type: PATCH_AND_GET_STD_DATA_SAGA,
  payload
});

const GET_MANAGED_ATTENDANCE_ARR_SAGA =
  "d_attendance/GET_MANAGED_ATTENDANCE_ARR_SAGA";
const getManagedAttendanceArrSaga = payload => ({
  type: GET_MANAGED_ATTENDANCE_ARR_SAGA,
  payload
});
const GET_MANAGED_CLUB_ATTENDANCE_ARR_SAGA =
  "d_attendance/GET_MANAGED_CLUB_ATTENDANCE_ARR_SAGA";
const getManagedClubAttendanceArrSaga = payload => ({
  type: GET_MANAGED_CLUB_ATTENDANCE_ARR_SAGA,
  payload
});

const PUT_ATTENDANCE_STD_DATA_SAGA =
  "d_attendance/PUT_ATTENDANCE_STD_DATA_SAGA";
const putAttendanceStdDataSaga = payload => ({
  type: PUT_ATTENDANCE_STD_DATA_SAGA,
  payload
});

const SET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA =
  "d_attendance/SET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA";
const setFirstScheduleAttendanceArrSaga = payload => ({
  type: SET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA,
  payload
});

const SET_ATTENDANCE_MEMO_SAGA = "d_attendance/SET_ATTENDANCE_MEMO_SAGA";
const setAttendanceMemoSaga = payload => ({
  type: SET_ATTENDANCE_MEMO_SAGA,
  payload
});

const GET_STUDENT_BY_STATE_SAGA = "d_attendance/GET_STUDENT_BY_STATE_SAGA";
const getStudentByStateSaga = payload => ({
  type: GET_STUDENT_BY_STATE_SAGA,
  payload
});

const GET_MEMO_FLOOR_DATA_SAGA = "d_attendance/GET_MEMO_FLOOR_DATA_SAGA";
const getMemoFloorDataSaga = payload => ({
  type: GET_MEMO_FLOOR_DATA_SAGA,
  payload
});

export const DAttendanceAction = {
  SET_CLASS_INFO,
  SET_FLOOR_DATA,
  GET_FLOOR_DATA_SAGA,
  SET_SELECT_ATTENDANCE_ARR,
  GET_SELECT_ATTENDANCE_ARR_SAGA,
  SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA,
  FAILURE_GET_SELECT_ATTENDANCE_ARR_SAGA,
  SET_CURRENT_ATTENDANCE_INDEX_ARR,
  SET_SELECT_ARR_WITH_DISABLE,
  SET_SELECT_ARR,
  SET_SELECT_ALL,
  SET_MANAGED_INFO,
  SET_MANAGED_CLASS_FLOOR_DATA,
  SET_MANAGED_CLUB_FLOOR_DATA,
  SET_IS_FAST_CLICK,
  SET_FIRST_SCHEDULE_ATTENDANCE_ARR,
  SET_CURRENT_CLASS_PRIORITY,
  SET_MEMO_FLOOR_DATA,
  SET_FLOOR_CLASS_DATA,
  SET_ATTENDANCE_STD_DATA,
  GET_ATTENDANCE_STD_DATA_SAGA,
  SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA,
  FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
  PATCH_ATTENDANCE_STD_DATA_SAGA,
  PATCH_AND_GET_STD_DATA_SAGA,
  GET_MANAGED_ATTENDANCE_ARR_SAGA,
  GET_MANAGED_CLUB_ATTENDANCE_ARR_SAGA,
  PUT_ATTENDANCE_STD_DATA_SAGA,
  SET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA,
  SET_ATTENDANCE_MEMO_SAGA,
  GET_STUDENT_BY_STATE_SAGA,
  SET_ATTENDANCE_MEMO_SAGA,
  GET_MEMO_FLOOR_DATA_SAGA
};

export const DAttendanceActionCreater = {
  setClassInfo,
  setFloorData,
  getFloorDataSaga,
  setSelectAttendanceArr,
  getSelectAttendanceArrSaga,
  successGetSelectAttendanceArrSaga,
  failureGetSelectAttendanceArrSaga,
  setCurrentAttendanceIndexArr,
  setSelectArrWithDisable,
  setSelectArr,
  setSelectAll,
  setManagedInfo,
  setManagedClassFloorData,
  setManagedClubFloorData,
  setIsFastClick,
  setFirstScheduleAttendanceArr,
  setCurrentClassPriority,
  setMemoFloorData,
  setFloorClassData,
  setAttendanceStdData,
  getAttendanceStdDataSaga,
  successGetAttendanceStdDataSaga,
  failureGetAttendanceStdDataSaga,
  patchAttendanceStdDataSaga,
  patchAndGetStdDataSaga,
  getManagedAttendanceArrSaga,
  getManagedClubAttendanceArrSaga,
  putAttendanceStdDataSaga,
  setFirstScheduleAttendanceArrSaga,
  setAttendanceMemoSaga,
  getStudentByStateSaga,
  setAttendanceMemoSaga,
  getMemoFloorDataSaga
};
