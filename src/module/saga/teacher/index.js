import { call, takeEvery } from "redux-saga/effects";
import { teacherAction } from "../../action/teacher";
import { requestGetApiWithAccessToken } from "../../../lib/requestApi";

function* getTeacherTodaySaga() {
  console.log(1);
}

function* teacherSaga() {
  yield takeEvery(teacherAction.GET_TEACHER_TODAY_SAGA, getTeacherTodaySaga);
}

export default teacherSaga;
