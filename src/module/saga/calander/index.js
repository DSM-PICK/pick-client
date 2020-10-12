import { takeEvery, select, put } from "redux-saga/effects";
import getDateObj from "../../../lib/calander";
import { requestApi, requestGetApi } from "../../../lib/requestApi";
import {
  SELECT_FIRST_DAY_SAGA,
  selectFirstDay,
  RESOLVE_CHANGE_TEACHER_SAGA,
  REJECT_CHANGE_TEACHER_SAGA,
  defaultStatus,
  failChangeTeacher,
  successChangeTeacher,
  GET_SCHEDULE_SAGA,
  getSchedule
} from "../../action/calander";

function* selectFirstDaySaga({ payload }) {
  const { teachers, month, date } = payload;

  const todayTeacher = yield select(store => store.calander.todayTeacher);
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
    yield put(defaultStatus());
    yield put(successChangeTeacher(200));
    alert("성공하였습니다");
  } catch (err) {
    yield put(failChangeTeacher(err.response.status));
    alert("실패했습니다");
  }
}

function* getScheduleSaga() {
  const nowDateObj = new Date();
  const year = nowDateObj.getFullYear();
  const month = nowDateObj.getMonth();

  const data = getDateObj(year, month);
  const oneArray = data.reduce((state, dateArr) => state.concat(dateArr), []);

  const promiseArray = oneArray.map(async ({ month, date, isActive }) => {
    try {
      const data = await requestGetApi(
        `/mars/activity/dates/${year}-${month.fillZero(2)}-${date.fillZero(2)}`
      );
      return {
        ...data.data,
        isActive,
        date,
        month
      };
    } catch (err) {
      return {
        error: true,
        isActive,
        date,
        month
      };
    }
  });

  const response = yield Promise.all(promiseArray);
  const splitArr = [];
  for (let i = 0; i < 6; i++) {
    splitArr.push(response.splice(0, 5));
  }

  yield put(getSchedule(splitArr));
}

function* calanderSaga() {
  yield takeEvery(SELECT_FIRST_DAY_SAGA, selectFirstDaySaga);
  yield takeEvery(RESOLVE_CHANGE_TEACHER_SAGA, resolveChangeTeacherSaga);
  yield takeEvery(REJECT_CHANGE_TEACHER_SAGA, rejectChangeTeacherSaga);
  yield takeEvery(GET_SCHEDULE_SAGA, getScheduleSaga);
}

export default calanderSaga;
