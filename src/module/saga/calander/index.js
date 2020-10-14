import { takeEvery, select, put, call } from "redux-saga/effects";
import getDateObj from "../../../lib/calander";
import {
  methodType,
  requestApiWithAccessToken,
  requestGetApi
} from "../../../lib/requestApi";
import {
  SELECT_FIRST_DAY_SAGA,
  selectFirstDay,
  getScheduleSaga as getScheduleAction,
  RESOLVE_CHANGE_TEACHER_SAGA,
  REJECT_CHANGE_TEACHER_SAGA,
  defaultStatus,
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
  if (!payloadDate) {
    alert("해당 날짜에 업무가 없습니다.");
    yield put(defaultStatus());
    return;
  }

  yield put(selectFirstDay(payloadDate));
}

function* rejectChangeTeacherSaga() {
  yield put(defaultStatus());
}

function* resolveChangeTeacherSaga() {
  try {
    const year = new Date().getFullYear();
    const {
      first: { month: month1, floor: floor1, date: date1 },
      second: { month: month2, floor: floor2, date: date2 }
    } = yield select(store => store.calander.changeDays);

    const res = yield call(
      requestApiWithAccessToken,
      methodType.PATCH,
      "/mars/working-teacher",
      {
        date1: `${year}-${month1.fillZero(2)}-${date1.fillZero(2)}`,
        date2: `${year}-${month2.fillZero(2)}-${date2.fillZero(2)}`,
        floor1,
        floor2
      }
    );
    yield put(getScheduleAction());
    yield put(defaultStatus());
    alert("성공하였습니다");
  } catch (err) {
    alert("실패했습니다");
    yield put(defaultStatus());
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
