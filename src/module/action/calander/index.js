export const SHOW_MY_SCHEDULE_STATUS = "calander/SHOW_MY_SCHEDULE";
export const DEFAULT_STATUS = "calander/DEFAULT";
export const CHANGE_MY_SCHEDULE_STATUS = "calander/CHANGE_MY_SCHEDULE";

export const SELECT_FIRST_DAY = "calander/SELECT_FIRST_DAY";
export const SELECT_FIRST_DAY_SAGA = "calander/SELECT_FIRST_DAY_SAGA";
export const SELECT_SECOND_DAY = "calander/SELECT_SECOND_DAY";
export const SELECT_SECOND_DAY_TEACHER = "calander/SELECT_SECOND_DAY_TEACHER";

export const RESOLVE_CHANGE_TEACHER_SAGA =
  "calander/RESOLVE_CHANGE_TEACHER_SAGA";
export const REJECT_CHANGE_TEACHER_SAGA = "calander/REJECT_CHANGE_TEACHER_SAGA";

export const SUCCESS_CHANGE_TEACHER = "calander/SUCCESS_CHANGE_TEACHER";
export const FAIL_CHANGE_TEACHER = "calander/FAIL_CHANGE_TEACHER";

export const defaultStatus = () => ({
  type: DEFAULT_STATUS,
});

export const showMySchedule = (payload) => ({
  type: SHOW_MY_SCHEDULE_STATUS,
  payload,
});

export const changeMySchedule = (payload) => ({
  type: CHANGE_MY_SCHEDULE_STATUS,
  payload,
});

export const selectFirstDay = (payload) => ({
  type: SELECT_FIRST_DAY,
  payload,
});

export const selectFirstDaySaga = (payload) => ({
  type: SELECT_FIRST_DAY_SAGA,
  payload,
});

export const selectSecondDay = (payload) => ({
  type: SELECT_SECOND_DAY,
  payload,
});

export const selectSecondDayTeacher = (payload) => ({
  type: SELECT_SECOND_DAY_TEACHER,
  payload,
});

export const resolveChangeTeacherSaga = () => ({
  type: RESOLVE_CHANGE_TEACHER_SAGA,
});

export const rejectChangeTeacherSaga = () => ({
  type: REJECT_CHANGE_TEACHER_SAGA,
});

export const successChangeTeacher = (payload) => ({
  type: SUCCESS_CHANGE_TEACHER,
  payload,
});

export const failChangeTeacher = (payload) => ({
  type: FAIL_CHANGE_TEACHER,
  payload,
});
