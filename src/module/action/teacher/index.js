const GET_TEACHER_TODAY_SAGA = "teacher/GET_TEACHER_TODAY_SAGA";
const GET_TEACHER_TODAY = "teacher/GET_TEACHER_TODAY";

const GET_TEACHER_WEEK_SAGA = "teacher/GET_TEACHER_WEEK_SAGA";
const GET_TEACHER_WEEK = "teacher/GET_TEACHER_WEEK";

const getTeacherTodaySaga = () => ({
  type: GET_TEACHER_TODAY_SAGA
});

const getTeacherToday = payload => ({
  type: GET_TEACHER_TODAY,
  payload
});

const getTeacherWeekSaga = () => ({
  type: GET_TEACHER_WEEK_SAGA
});

const getTeacherWeek = payload => ({
  type: GET_TEACHER_WEEK,
  payload
});

export const teacherAction = {
  GET_TEACHER_TODAY_SAGA,
  GET_TEACHER_TODAY,
  GET_TEACHER_WEEK_SAGA,
  GET_TEACHER_WEEK
};

export const teacherActionCreater = {
  getTeacherTodaySaga,
  getTeacherToday,
  getTeacherWeekSaga,
  getTeacherWeek
};
