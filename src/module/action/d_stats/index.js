const SET_STATS = "d_stats/SET_STATS";
const setStats = payload => ({
  type: SET_STATS,
  payload
});

const GET_STATS_SAGA = "d_stats/GET_STATS_SAGA";
const getStatsSaga = payload => ({
  type: GET_STATS_SAGA,
  payload
});

const SET_SCLICKED_FLOOR = "d_stats/SET_SCLICKED_FLOOR";
const setSClickedFloor = payload => ({
  type: SET_SCLICKED_FLOOR,
  payload
});

const SET_MANAGED_INFO = "d_stats/SET_MANAGED_INFO";
const setManagedInfo = payload => ({
  type: SET_MANAGED_INFO,
  payload
});

const SET_MANAGED_CLASS_FLOOR_DATA = "d_stats/SET_MANAGED_CLASS_FLOOR_DATA";
const setManagedClassFloorData = payload => ({
  type: SET_MANAGED_CLASS_FLOOR_DATA,
  payload
});
const SET_MANAGED_CLUB_FLOOR_DATA = "d_stats/SET_MANAGED_CLUB_FLOOR_DATA";
const setManagedClubFloorData = payload => ({
  type: SET_MANAGED_CLUB_FLOOR_DATA,
  payload
});
const GET_MANAGED_FLOOR_DATA_SAGA = "d_stats/GET_MANAGED_FLOOR_DATA_SAGA";
const getManagedFloorDataSaga = payload => ({
  type: GET_MANAGED_FLOOR_DATA_SAGA,
  payload
});

const SET_FIRST_SCHEDULE_ATTENDANCE_ARR =
  "d_stats/SET_FIRST_SCHEDULE_ATTENDANCE_ARR";
const setFirstScheduleAttendanceArr = payload => ({
  type: SET_FIRST_SCHEDULE_ATTENDANCE_ARR,
  payload
});
const GET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA =
  "d_stats/GET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA";
const getFirstScheduleAttendanceArrSaga = payload => ({
  type: GET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA,
  payload
});

const SET_SCLICKED_PRIORITY = "d_stats/SET_SCLICKED_PRIORITY";
const setSClickedPriority = payload => ({
  type: SET_SCLICKED_PRIORITY,
  payload
});

const GET_SCLICKED_PRIORITY_SAGA = "d_stats/GET_SCLICKED_PRIORITY";
const getSClickedPrioritySaga = payload => ({
  type: GET_SCLICKED_PRIORITY_SAGA,
  payload
});

const SET_SCLICKED_PRIORITY_ARR_PRIORITY =
  "d_stats/SET_SCLICKED_PRIORITY_ARR_PRIORITY";
const setSClickedPriorityArrPriority = payload => ({
  type: SET_SCLICKED_PRIORITY_ARR_PRIORITY,
  payload
});

const SET_SATTENDANCE_DATA = "d_stats/SET_SATTENDANCE_DATA";
const setSAttendanceData = payload => ({
  type: SET_SATTENDANCE_DATA,
  payload
});

const GET_SATTENDANCE_DATA_SAGA = "d_stats/GET_SATTENDANCE_DATA_SAGA";
const getSAttendanceDataSaga = payload => ({
  type: GET_SATTENDANCE_DATA_SAGA,
  payload
});

const SET_ACTIVITY_BY_DATE = "d_stats/SET_ACTIVITY_BY_DATE";
const setActivityByDate = payload => ({
  type: SET_ACTIVITY_BY_DATE,
  payload
});

const GET_ACTIVITY_BY_DATE_SAGA = "d_stats/GET_ACTIVITY_BY_DATE_SAGA";
const getActivityByDateSaga = payload => ({
  type: GET_ACTIVITY_BY_DATE_SAGA,
  payload
});

export const DStatsAction = {
  SET_STATS,
  GET_STATS_SAGA,
  SET_SCLICKED_FLOOR,
  SET_MANAGED_INFO,
  SET_MANAGED_CLASS_FLOOR_DATA,
  SET_MANAGED_CLUB_FLOOR_DATA,
  GET_MANAGED_FLOOR_DATA_SAGA,
  SET_FIRST_SCHEDULE_ATTENDANCE_ARR,
  GET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA,
  SET_SCLICKED_PRIORITY,
  GET_SCLICKED_PRIORITY_SAGA,
  SET_SCLICKED_PRIORITY_ARR_PRIORITY,
  SET_SATTENDANCE_DATA,
  GET_SATTENDANCE_DATA_SAGA,
  SET_ACTIVITY_BY_DATE,
  GET_ACTIVITY_BY_DATE_SAGA
};

export const DStatsActionCreater = {
  setStats,
  getStatsSaga,
  setSClickedFloor,
  setManagedInfo,
  setManagedClassFloorData,
  setManagedClubFloorData,
  getManagedFloorDataSaga,
  setFirstScheduleAttendanceArr,
  getFirstScheduleAttendanceArrSaga,
  setSClickedPriority,
  getSClickedPrioritySaga,
  setSClickedPriorityArrPriority,
  setSAttendanceData,
  getSAttendanceDataSaga,
  setActivityByDate,
  getActivityByDateSaga
};
