export const GET_SCHEDULE = "schedule/GET_SCHEDULE";
export const GET_SCHEDULE_SUCCESS = "schedule/GET_SCHEDULE_SUCCESS";
export const SET_DATE = "schedule/SET_DATE";

export const setDate = payload => ({
  type: SET_DATE,
  payload
});

export const getSchedule = payload => ({
  type: GET_SCHEDULE,
  payload
});

export const getScheduleSuccess = payload => ({
  type: GET_SCHEDULE_SUCCESS,
  payload
});
