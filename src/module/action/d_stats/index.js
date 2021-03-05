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

export const DStatsAction = {
  SET_STATS,
  GET_STATS_SAGA
};

export const DStatsActionCreater = {
  setStats,
  getStatsSaga
};
