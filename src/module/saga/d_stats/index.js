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

function* getSClickedPriority(action) {
  try {
    const { schedule, floor } = action.payload;

    const REQUEST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(schedule, floor);
    const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    const clickedPriority = res.data.locations.map((locationData, mapIndex) => {
      const { name, priority } = locationData;
      return { text: name, priority, isClicked: mapIndex ? false : true };
    });

    const { setSClickedPriority } = DStatsActionCreater;
    yield put(setSClickedPriority({ clickedPriority }));
  } catch (error) {
    console.log("getSClickedPriority error");
    console.log(error);
  }
}

function* getSAttendanceData(action) {
  try {
    const { schedule, floor, priority, date } = action.payload;

    const REQUEST_URL = ATTENDANCE.ATTENDANCE_LIST_URL(
      schedule,
      floor,
      priority,
      date
    );

    const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);
    const { attendances } = res.data;

    const { setSAttendanceData } = DStatsActionCreater;
    yield put(setSAttendanceData({ statsAttendance: attendances }));
  } catch (error) {
    console.log("getSAttendanceData error");
    console.log(error);
  }
}

function* dStatsSaga() {
  const {
    GET_STATS_SAGA,
    GET_SCLICKED_PRIORITY_SAGA,
    GET_SATTENDANCE_DATA_SAGA
  } = DStatsAction;

  yield takeEvery(GET_STATS_SAGA, getStats);
  yield takeEvery(GET_SCLICKED_PRIORITY_SAGA, getSClickedPriority);
  yield takeEvery(GET_SATTENDANCE_DATA_SAGA, getSAttendanceData);
}

export default dStatsSaga;
