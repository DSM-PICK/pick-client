import { call, put, takeEvery } from "redux-saga/effects";
import {
  getScheduleSuccess,
  GET_SCHEDULE,
  GET_SCHEDULE_MINI_CALANDER,
  setDate,
  setDateMiniCalander,
  getScheduleMiniCalanderSuccess
} from "../../action/schedule";
import WindowCalander from "window-calander";
import * as scheduleApi from "../../../lib/api/schedule";

function* getScheduleSaga(action) {
  const { year, month } = action.payload;

  const data = WindowCalander(year, month);

  const dateObjArr = data.reduce((state, now) => {
    return state.concat(now.filter((_, i) => i !== 0 && i !== 6));
  }, []);
  const promiseArr = dateObjArr.map(async data => {
    const { year, month, date } = data;
    const res = await scheduleApi.getTeacherDate({ year, month, date });
    const { floor2, floor3, floor4, schedule } = res.data;
    return {
      ...data,
      floor2,
      floor3,
      floor4,
      schedule
    };
  });

  const datas = yield call(Promise.all.bind(Promise), promiseArr);
  yield put(setDate({ year, month }));
  yield put(getScheduleSuccess(datas));
}

function* getScheduleMiniCalanderSaga(action) {
  const { year, month } = action.payload;

  const data = WindowCalander(year, month);

  const dateObjArr = data.reduce((state, now) => {
    return state.concat(now.filter((_, i) => i !== 0 && i !== 6));
  }, []);
  const promiseArr = dateObjArr.map(async data => {
    const { year, month, date } = data;
    const res = await scheduleApi.getTeacherDate({ year, month, date });
    const { floor2, floor3, floor4, schedule } = res.data;
    return {
      ...data,
      floor2,
      floor3,
      floor4,
      schedule
    };
  });

  const datas = yield call(Promise.all.bind(Promise), promiseArr);
  yield put(setDateMiniCalander({ year, month }));
  yield put(getScheduleMiniCalanderSuccess(datas));
}

function* scheduleSaga() {
  yield takeEvery(GET_SCHEDULE, getScheduleSaga);
  yield takeEvery(GET_SCHEDULE_MINI_CALANDER, getScheduleMiniCalanderSaga);
}

export default scheduleSaga;
