import { put, call, takeEvery } from "@redux-saga/core/effects";
import {
  requestApiWithAccessToken,
  requestGetApiWithAccessToken
} from "../../../lib/requestApi";
import { ATTENDANCE } from "../../../lib/requestUrl";
import { DStatsAction, DStatsActionCreater } from "../../action/d_stats";

function* getStats(action) {
  const grade = action.payload;

  const REQUEST_URL = ATTENDANCE.RECORD_BY_GRADE_URL(grade);
  const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

  const { setStats } = DStatsActionCreater;
  yield put(setStats({ grade, data: res.data }));
}

function* getSClickedPriority(action) {
  const { schedule, floor } = action.payload;

  const REQUEST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(schedule, floor);
  const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

  const clickedPriority = res.data.locations.map((locationData, mapIndex) => {
    const { name, priority } = locationData;
    return { text: name, priority, isClicked: mapIndex ? false : true };
  });

  const { setSClickedPriority } = DStatsActionCreater;
  yield put(setSClickedPriority({ clickedPriority }));

  console.log(res);
}

function* dStatsSaga() {
  const { GET_STATS_SAGA, GET_SCLICKED_PRIORITY_SAGA } = DStatsAction;

  yield takeEvery(GET_STATS_SAGA, getStats);
  yield takeEvery(GET_SCLICKED_PRIORITY_SAGA, getSClickedPriority);
}

export default dStatsSaga;
