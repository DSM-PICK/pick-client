import { put, call, takeEvery } from "@redux-saga/core/effects";
import { requestGetApiWithAccessToken } from "../../../lib/requestApi";
import { ATTENDANCE } from "../../../lib/requestUrl";
import { DStatsAction, DStatsActionCreater } from "../../action/d_stats";

function* getStats(action) {
  try {
    const { grade, date } = action.payload;

    const REQUEST_URL = ATTENDANCE.RECORD_BY_GRADE_URL(grade, date);
    const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    const { setStats } = DStatsActionCreater;
    yield put(setStats({ grade, data: res.data }));
  } catch (error) {
    console.log(error);
  }
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

function* getActivityByDate(action) {
  try {
    const { date } = action.payload;

    const REQUEST_URL = ATTENDANCE.ACTIVITY_BY_DATE_URL(date);
    const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    const { setActivityByDate } = DStatsActionCreater;
    yield put(setActivityByDate({ ...res.data }));
  } catch (error) {
    console.log("getActivityByDate error");
    console.log(error);

    const { setActivityByDate } = DStatsActionCreater;
    yield put(
      setActivityByDate({
        schedule: "no-schedule",
        secondFloorTeacherName: "",
        thirdFloorTeacherName: "",
        forthFloorTeacherName: ""
      })
    );
  }
}

function* getFirstScheduleAttendanceArr() {
  try {
    const { SET_FIRST_SCHEDULE_ATTENDANCE_ARR } = DStatsAction;
    const REQUEST_URL_CLUB = ATTENDANCE.ATTENDANCE_NAVIGATION_URL("CLUB", 4);
    const REQUEST_URL_CLASS = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(
      "SELF_STUDY",
      4
    );

    const res_club = yield call(requestGetApiWithAccessToken, REQUEST_URL_CLUB);
    const res_class = yield call(
      requestGetApiWithAccessToken,
      REQUEST_URL_CLASS
    );

    yield put({
      type: SET_FIRST_SCHEDULE_ATTENDANCE_ARR,
      payload: {
        club: res_club.data.locations,
        class: res_class.data.locations
      }
    });
  } catch (err) {
    console.log(`d_stats/getFirstScheduleAttendanceArr`);
    console.log(err);
  }
}

function* getManagedFloorData(action) {
  try {
    const { floor, schedule } = action.payload;

    const REQUEST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(schedule, floor);

    const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    const {
      setManagedClassFloorData,
      setManagedClubFloorData
    } = DStatsActionCreater;

    if (schedule === "club") {
      yield put(setManagedClubFloorData(res.data.locations));
    } else {
      yield put(setManagedClassFloorData(res.data.locations));
    }
  } catch (error) {
    console.log(`d_stats/getManagedFloorData`);
    console.log(error);
  }
}

function* dStatsSaga() {
  const {
    GET_STATS_SAGA,
    GET_SCLICKED_PRIORITY_SAGA,
    GET_SATTENDANCE_DATA_SAGA,
    GET_ACTIVITY_BY_DATE_SAGA,
    GET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA,
    GET_MANAGED_FLOOR_DATA_SAGA
  } = DStatsAction;

  yield takeEvery(GET_STATS_SAGA, getStats);
  yield takeEvery(GET_SCLICKED_PRIORITY_SAGA, getSClickedPriority);
  yield takeEvery(GET_SATTENDANCE_DATA_SAGA, getSAttendanceData);
  yield takeEvery(GET_ACTIVITY_BY_DATE_SAGA, getActivityByDate);
  yield takeEvery(
    GET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA,
    getFirstScheduleAttendanceArr
  );
  yield takeEvery(GET_MANAGED_FLOOR_DATA_SAGA, getManagedFloorData);
}

export default dStatsSaga;
