export const SET_FIRST_FLOOR_DATA = "attendance/SET_FIRST_FLOOR_DATA";
export const SET_SECOND_FLOOR_DATA = "attendance/SET_SECOND_FLOOR_DATA";
export const SET_THIRD_FLOOR_DATA = "attendance/SET_THIRD_FLOOR_DATA";
export const SET_FORTH_FLOOR_DATA = "attendance/SET_FORTH_FLOOR_DATA";

export const SET_FIRST_TEACHER_NAME = "attendance/SET_FIRST_TEACHER_NAME";
export const SET_SECOND_TEACHER_NAME = "attendance/SET_SECOND_TEACHER_NAME";
export const SET_THIRD_TEACHER_NAME = "attendance/SET_THIRD_TEACHER_NAME";
export const SET_FORTH_TEACHER_NAME = "attendance/SET_FORTH_TEACHER_NAME";

export const SET_DATE = "attendance/SET_DATE";
export const SET_DAY_OF_WEEK = "attendance/SET_DAY_OF_WEEK";

export const SET_SCHEDULE = "attendance/SET_SCHEDULE";
export const SET_CLUB_NAME = "attendance/SET_CLUB_NAME";
export const SET_HEAD = "attendance/SET_HEAD";

export const SET_CURRENT_CLASS_INFO = "attendance/SET_CURRENT_CLASS_INFO";

export const SET_IS_LOADING = "attendance/SET_IS_LOADING";

export const SET_CHECK_ARR_WITH_DISABLE =
  "attendance/SET_CHECK_ARR_WITH_DISABLE";
export const SET_CHECK_ARR = "attendance/SET_CHECK_ARR";
export const SET_CHECK_ALL = "attendance/SET_CHECK_ALL";

export const SET_TODAY_SCHEDULE = "attendance/SET_TODAY_SCHEDULE";

export const GET_FLOOR_DATA_SAGA = "attendance/GET_FLOOR_DATA_SAGA";

export const SET_ATTENDANCE_STD_DATA = "attendance/SET_ATTENDANCE_STD_DATA";
export const GET_ATTENDANCE_STD_DATA_SAGA =
  "attendance/GET_ATTENDANCE_STD_DATA_SAGA";
export const FAILURE_GET_ATTENDANCE_STD_DATA_SAGA =
  "attendance/FAILURE_GET_ATTENDANCE_STD_DATA_SAGA";

export const POST_ATTENDANCE_STD_DATA_SAGA =
  "attendance/POST_ATTENDANCE_STD_DATA_SAGA";
export const FAILURE_POST_ATTENDANCE_STD_DATA_SAGA =
  "attendance/FAILURE_POST_ATTENDANCE_STD_DATA_SAGA";

export const PUT_ATTENDANCE_STD_DATA_SAGA =
  "attendance/PUT_ATTENDANCE_STD_DATA_SAGA";

export const PUT_ATTENDANCE_MEMO_SAGA = "attendance/PUT_ATTENDANCE_MEMO_SAGA";

export const MODIFY_ATTENDANCES_DATA_SAGA =
  "attendance/MODIFY_ATTENDANCES_DATA_SAGA";

export const setSecondFloorData = payload => ({
  type: SET_SECOND_FLOOR_DATA,
  payload
});

export const setThirdFloorData = payload => ({
  type: SET_THIRD_FLOOR_DATA,
  payload
});

export const setForthFloorData = payload => ({
  type: SET_FORTH_FLOOR_DATA,
  payload
});

export const setFirstFloorData = payload => ({
  type: SET_FIRST_FLOOR_DATA,
  payload
});

export const setFirstTeacherName = payload => ({
  type: SET_FIRST_TEACHER_NAME,
  payload
});

export const setSecondTeacherName = payload => ({
  type: SET_SECOND_TEACHER_NAME,
  payload
});

export const setThirdTeacherName = payload => ({
  type: SET_THIRD_TEACHER_NAME,
  payload
});

export const setForthTeacherName = payload => ({
  type: SET_FORTH_TEACHER_NAME,
  payload
});

export const setDate = payload => ({
  type: SET_DATE,
  payload
});

export const setDayOfWeek = payload => ({
  type: SET_DAY_OF_WEEK,
  payload
});

export const setSchedule = payload => ({
  type: SET_SCHEDULE,
  payload
});

export const setClubName = payload => ({
  type: SET_CLUB_NAME,
  payload
});

export const setHead = payload => ({
  type: SET_HEAD,
  payload
});

export const setCurrentClassInfo = payload => ({
  type: SET_CURRENT_CLASS_INFO,
  payload
});

export const setIsLoading = payload => ({
  type: SET_IS_LOADING,
  payload
});

export const setCheckArrWithDisable = payload => ({
  type: SET_CHECK_ARR_WITH_DISABLE,
  payload
});
export const setCheckArr = payload => ({
  type: SET_CHECK_ARR,
  payload
});
export const setCheckAll = payload => ({
  type: SET_CHECK_ALL,
  payload
});

export const setTodaySchedule = payload => ({
  type: SET_TODAY_SCHEDULE,
  payload
});

export const getFloorDataSaga = payload => ({
  type: GET_FLOOR_DATA_SAGA,
  payload
});

export const setAttendanceStdData = payload => ({
  type: SET_ATTENDANCE_STD_DATA,
  payload
});

export const getAttendanceStdDataSaga = payload => ({
  type: GET_ATTENDANCE_STD_DATA_SAGA,
  payload
});

export const failureGetAttendanceStdDataSaga = payload => ({
  type: FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
  payload
});

export const postAttendanceStdDataSaga = payload => ({
  type: POST_ATTENDANCE_STD_DATA_SAGA,
  payload
});

export const failurePostAttendanceStdDataSaga = payload => ({
  type: FAILURE_POST_ATTENDANCE_STD_DATA_SAGA,
  payload
});

export const putAttendanceStdDataSaga = payload => ({
  type: PUT_ATTENDANCE_STD_DATA_SAGA,
  payload
});

export const putAttendanceMemoSaga = payload => ({
  type: PUT_ATTENDANCE_MEMO_SAGA,
  payload
});

export const modifyAttendancesDataSaga = payload => ({
  type: MODIFY_ATTENDANCES_DATA_SAGA,
  payload
});
