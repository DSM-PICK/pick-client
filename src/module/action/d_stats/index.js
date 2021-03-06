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

const SET_SCLICKED_PRIORITY = "d_stats/SET_SCLICKED_PRIORITY";
const setSClickedPriority = payload => ({
  type: SET_SCLICKED_PRIORITY,
  payload
});

export const DStatsAction = {
  SET_STATS,
  GET_STATS_SAGA,
  SET_SCLICKED_FLOOR,
  SET_SCLICKED_PRIORITY
};

export const DStatsActionCreater = {
  setStats,
  getStatsSaga,
  setSClickedFloor,
  setSClickedPriority
};
