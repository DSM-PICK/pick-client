import { takeEvery, select, put, call } from "redux-saga/effects";
import {
  SELECT_FIRST_DAY_SAGA,
  selectFirstDay,
  RESOLVE_CHANGE_TEACHER_SAGA,
  REJECT_CHANGE_TEACHER_SAGA,
  defaultStatus,
  failChangeTeacher,
  successChangeTeacher,
} from "../../action/calander";

function* selectFirstDaySaga({ payload }) {
  const { teachers, month, date } = payload;

  const todayTeacher = yield select((store) => store.calander.todayTeacher);
  let payloadDate = null;
  teachers.forEach(({ floor, name }) => {
    if (name === todayTeacher) {
      payloadDate = { name, floor, month, date };
    }
  });
  yield put(selectFirstDay(payloadDate));
}

function* rejectChangeTeacherSaga() {
  yield put(defaultStatus());
}

function* resolveChangeTeacherSaga() {
  try {
    // yield call(axios.post, "URL");
    yield put(defaultStatus());
    yield successChangeTeacher(200);
    alert("성공하였습니다");
  } catch (err) {
    yield put(failChangeTeacher(err.response.status));
    alert("실패했습니다");
  }
}

function* calanderSaga() {
  yield takeEvery(SELECT_FIRST_DAY_SAGA, selectFirstDaySaga);
  yield takeEvery(RESOLVE_CHANGE_TEACHER_SAGA, resolveChangeTeacherSaga);
  yield takeEvery(REJECT_CHANGE_TEACHER_SAGA, rejectChangeTeacherSaga);
}

export default calanderSaga;
