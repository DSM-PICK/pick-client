export const GET_SCHEDULE = "schedule/GET_SCHEDULE";
export const GET_SCHEDULE_SUCCESS = "schedule/GET_SCHEDULE_SUCCESS";

export const getSchedule = payload => ({
  type: GET_SCHEDULE,
  payload
});

export const getScheduleSuccess = payload => ({
  type: GET_SCHEDULE_SUCCESS,
  payload
});
