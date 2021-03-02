import { call, put, takeEvery } from "redux-saga/effects";
import { getScheduleSuccess, GET_SCHEDULE } from "../../action/schedule";
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
  yield put(getScheduleSuccess(datas));
}

function* scheduleSaga() {
  yield takeEvery(GET_SCHEDULE, getScheduleSaga);
}

export default scheduleSaga;
