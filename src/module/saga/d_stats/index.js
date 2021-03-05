import { call, takeEvery } from "@redux-saga/core/effects";
import { requestGetApiWithAccessToken } from "../../../lib/requestApi";
import { ATTENDANCE } from "../../../lib/requestUrl";
import { DStatsAction } from "../../action/d_stats";

function* getStats(action) {
  const { grade } = action.payload;

  const REQUEST_URL = ATTENDANCE.RECORD_BY_GRADE_URL(grade);

  const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

  console.log(res);
}

function* dStatsSaga() {
  const { GET_STATS_SAGA } = DStatsAction;

  yield takeEvery(GET_STATS_SAGA, getStats);
}

export default dStatsSaga;
