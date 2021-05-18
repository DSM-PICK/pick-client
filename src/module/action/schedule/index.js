export const SET_TODAY_SCHEDULE = "schedule/SET_TODAY_SCHEDULE";
export const GET_SCHEDULE = "schedule/GET_SCHEDULE";
export const GET_SCHEDULE_SUCCESS = "schedule/GET_SCHEDULE_SUCCESS";
export const SET_DATE = "schedule/SET_DATE";
export const SET_SELECTED_DATE = "schedule/SET_SELECTED_DATE";

export const SET_DATE_MINI_CALANDER = "schedule/SET_DATE_MINI_CALANDER";
export const GET_SCHEDULE_MINI_CALANDER = "schedule/GET_SCHEDULE_MINI_CALANDER";
export const GET_SCHEDULE_MINI_CALANDER_SUCCESS =
  "schedule/GET_SCHEDULE_MINI_CALANDER_SUCCESS";

export const SET_FIRST_SELECT = "schedule/SET_FIRST_SELECT";
export const SET_SECOND_SELECT = "schedule/SET_SECOND_SELECT";
export const SET_CHANGE_MODE = "schedule/SET_CHANGE_MODE";
export const RESET_SCHEDULE_SELECT = "schedule/RESET_SCHEDULE_SELECT";

export const resetScheduleSelect = () => ({
  type: RESET_SCHEDULE_SELECT
});

export const setChangeMode = payload => ({
  type: SET_CHANGE_MODE,
  payload
});

export const setFirstSelect = payload => ({
  type: SET_FIRST_SELECT,
  payload
});

export const setSecondSelect = payload => ({
  type: SET_SECOND_SELECT,
  payload
});

export const setTodaySchedule = payload => ({
  type: SET_TODAY_SCHEDULE,
  payload
});

export const setDate = payload => ({
  type: SET_DATE,
  payload
});

export const setSelectedDate = payload => ({
  type: SET_SELECTED_DATE,
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

export const setDateMiniCalander = payload => ({
  type: SET_DATE_MINI_CALANDER,
  payload
});

export const getScheduleMiniCalander = payload => ({
  type: GET_SCHEDULE_MINI_CALANDER,
  payload
});

export const getScheduleMiniCalanderSuccess = payload => ({
  type: GET_SCHEDULE_MINI_CALANDER_SUCCESS,
  payload
});
