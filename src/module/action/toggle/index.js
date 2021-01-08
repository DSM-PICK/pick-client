const SET_SELECT_SCHEDULE = "toggle/SET_SELECT_SCHEDULE";

const setSelectSchedule = payload => ({
  type: SET_SELECT_SCHEDULE,
  payload
});

export const ToggleAction = {
  SET_SELECT_SCHEDULE
};

export const ToggleActionCreater = {
  setSelectSchedule
};
