import { takeEvery, select, put } from "redux-saga/effects";
import {
  SELECT_DAY_SAGA,
  selectDay,
  SELECT_FIRST_DAY,
  SELECT_FIRST_DAY_SAGA,
  selectFirstDay,
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

function* calanderSaga() {
  yield takeEvery(SELECT_FIRST_DAY_SAGA, selectFirstDaySaga);
}

export default calanderSaga;
