export const SET_SELF_STUDY_DATA = "attendance/SET_SELF_STUDY_DATA";
export const SET_SECOND_FLOOR_DATA = "attendance/SET_SECOND_FLOOR_DATA";
export const SET_THIRD_FLOOR_DATA = "attendance/SET_THIRD_FLOOR_DATA";
export const SET_FORTH_FLOOR_DATA = "attendance/SET_FORTH_FLOOR_DATA";

export const SET_SELF_STUDY_TEACHER_NAME =
  "attendance/SET_SELF_STUDY_TEACHER_NAME";
export const SET_SECOND_TEACHER_NAME = "attendance/SET_SECOND_TEACHER_NAME";
export const SET_THIRD_TEACHER_NAME = "attendance/SET_THIRD_TEACHER_NAME";
export const SET_FORTH_TEACHER_NAME = "attendance/SET_FORTH_TEACHER_NAME";

export const SET_ACTIVITY = "attendance/SET_ACTIVITY";
export const SET_FLOOR = "attendance/SET_FLOOR";
export const SET_PRIORITY = "attendance/SET_PRIORITY";

export const SET_NUMBER = "attendance/SET_NUMBER";
export const SET_PERIOD = "attendance/SET_PERIOD";
export const SET_STATE = "attendance/SET_STATE";

export const SET_DATE = "attendance/SET_DATE";
export const SET_DAY_OF_WEEK = "attendance/SET_DAY_OF_WEEK";


export const GET_FLOOR_DATA_SAGA = "attendance/GET_FLOOR_DATA_SAGA"; 

export const SET_ATTENDANCE_STD_DATA = "attendance/SET_ATTENDANCE_STD_DATA";
export const GET_ATTENDANCE_STD_DATA_SAGA = "attendance/GET_ATTENDANCE_STD_DATA_SAGA"; 
export const FAILURE_GET_ATTENDANCE_STD_DATA_SAGA = "attendance/FAILURE_GET_ATTENDANCE_STD_DATA_SAGA"; 
export const POST_ATTENDANCE_STD_DATA_SAGA = "attendance/POST_ATTENDANCE_STD_DATA_SAGA";
export const FAILURE_POST_ATTENDANCE_STD_DATA_SAGA =
  "attendance/FAILURE_POST_ATTENDANCE_STD_DATA_SAGA";

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

export const setSelfStudyData = payload => ({
  type: SET_SELF_STUDY_DATA,
  payload
});

export const setSelfStudyTeacherName = payload => ({
  type: SET_SELF_STUDY_TEACHER_NAME,
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

export const setActivity = payload => ({
  type: SET_ACTIVITY,
  payload
});

export const setFloor = payload => ({
  type: SET_FLOOR,
  payload
});

export const setPriority = payload => ({
  type: SET_PRIORITY,
  payload
});

export const setNumber = payload => ({
  type: SET_NUMBER,
  payload
});

export const setPeriod = payload => ({
  type: SET_PERIOD,
  payload
});

export const setState = payload => ({
  type: SET_STATE,
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
