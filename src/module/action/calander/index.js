export const SHOW_MY_SCHEDULE = "calander/SHOW_MY_SCHEDULE";
export const DEFAULT_STATUS = "calander/DEFAULT";

export const defaultStatus = () => ({
  type: DEFAULT_STATUS,
});

export const showMySchedule = (payload) => ({
  type: SHOW_MY_SCHEDULE,
  payload,
});
