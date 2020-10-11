export const SET_CLUB_FIRST_DATA = "attendance/SET_CLUB_FIRST_DATA";
export const SET_CLUB_SECOND_DATA = "attendance/SET_CLUB_SECOND_DATA";
export const SET_CLUB_THIRD_DATA = "attendance/SET_CLUB_THIRD_DATA";
export const SET_CLUB_FORTH_DATA = "attendance/SET_CLUB_FORTH_DATA";
export const SET_SELF_STUDY_SECOND_DATA =
  "attendance/SET_SELF_STUDY_SECOND_DATA";
export const SET_SELF_STUDY_THIRD_DATA = "attendance/SET_SELF_STUDY_THIRD_DATA";
export const SET_SELF_STUDY_FORTH_DATA = "attendance/SET_SELF_STUDY_FORTH_DATA";

export const SET_ACTIVITY = "attendance/SET_ACTIVITY";
export const SET_FLOOR = "attendance/SET_FLOOR";
export const SET_PRIORITY = "attendance/SET_PRIORITY";

export const SET_NUMBER = "attendance/SET_NUMBER";
export const SET_PERIOD = "attendance/SET_PERIOD";
export const SET_STATE = "attendance/SET_STATE";

export const SET_ATTENDANCE_DATA = "attendance/SET_ATTENDANCE_DATA";

/**/
export const GET_CLUB_FLOOR_DATA_SAGA = "attendance/GET_CLUB_FLOOR_DATA_SAGA";
export const FAILURE_GET_CLUB_FLOOR_DATA_SAGA =
  "attendance/FAILURE_GET_CLUB_FLOOR_DATA_SAGA";
export const GET_SELF_STUDY_FLOOR_DATA_SAGA =
  "attendance/GET_SELF_STUDY_FLOOR_DATA_SAGA";
export const FAILURE_GET_SELF_STUDY_FLOOR_DATA_SAGA =
  "attendance/FAILURE_GET_SELF_STUDY_FLOOR_DATA_SAGA";
export const GET_ATTENDANCE_DATA_SAGA = "attendance/SET_ATTENDANCE_DATA";
export const FAILURE_GET_ATTENDANCE_DATA_SAGA =
  "attendance/FAILURE_GET_ATTENDANCE_DATA_SAGA";
export const POST_ATTENDANCE_DATA_SAGA = "attendance/POST_ATTENDANCE_DATA_SAGA";
export const FAILURE_POST_ATTENDANCE_DATA_SAGA =
  "attendance/FAILURE_POST_ATTENDANCE_DATA_SAGA";

export const setClubFirstData = payload => ({
  type: SET_CLUB_FIRST_DATA,
  payload
});

export const setClubSecondData = payload => ({
  type: SET_CLUB_SECOND_DATA,
  payload
});

export const setClubThirdData = payload => ({
  type: SET_CLUB_THIRD_DATA,
  payload
});

export const setClubForthData = payload => ({
  type: SET_CLUB_FORTH_DATA,
  payload
});

export const setSelfStudySecondData = payload => ({
  type: SET_CLUB_FIRST_DATA,
  payload
});

export const setSelfStudyThirdData = payload => ({
  type: SET_CLUB_FIRST_DATA,
  payload
});

export const setSelfStudyForthData = payload => ({
  type: SET_CLUB_FIRST_DATA,
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

export const setAttendanceData = payload => ({
  type: SET_ATTENDANCE_DATA,
  payload
});

export const getClubFloorDataSaga = () => ({
  type: GET_CLUB_FLOOR_DATA_SAGA
});

export const failureGetClubFloorDataSaga = payload => ({
  type: FAILURE_GET_CLUB_FLOOR_DATA_SAGA,
  payload
});

export const getSelfStudyFloorDataSaga = () => ({
  type: GET_SELF_STUDY_FLOOR_DATA_SAGA
});

export const failureGetSelfStudyFloorDataSaga = payload => ({
  type: FAILURE_GET_SELF_STUDY_FLOOR_DATA_SAGA,
  payload
});

export const getAttendanceDataSaga = payload => ({
  type: GET_ATTENDANCE_DATA_SAGA,
  payload
});

export const failureGetAttendanceDataSaga = payload => ({
  type: FAILURE_GET_ATTENDANCE_DATA_SAGA,
  payload
});

export const postAttendanceDataSaga = payload => ({
  type: POST_ATTENDANCE_DATA_SAGA
});

export const failurePostAttendanceDataSaga = payload => ({
  type: FAILURE_POST_ATTENDANCE_DATA_SAGA,
  payload
});
