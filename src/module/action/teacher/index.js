const GET_TEACHER_TODAY_SAGA = "teacher/GET_TEACHER_TODAY_SAGA";

const getTeacherTodaySaga = () => ({
  type: GET_TEACHER_TODAY_SAGA
});

export const teacherAction = {
  GET_TEACHER_TODAY_SAGA
};

export const teacherActionCreater = {
  getTeacherTodaySaga
};
