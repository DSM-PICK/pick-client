import { put, call, takeEvery } from "@redux-saga/core/effects";
import { requestGetApiWithAccessToken } from "../../../lib/requestApi";
import { ATTENDANCE } from "../../../lib/requestUrl";
import { DStatsAction, DStatsActionCreater } from "../../action/d_stats";

function* getStats(action) {
  const grade = action.payload;

  const REQUEST_URL = ATTENDANCE.RECORD_BY_GRADE_URL(grade);

  const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

  const { setStats } = DStatsActionCreater;

  yield put(setStats({ grade, data: res.data }));
}

function* dStatsSaga() {
  const { GET_STATS_SAGA } = DStatsAction;

  yield takeEvery(GET_STATS_SAGA, getStats);
}

export default dStatsSaga;
