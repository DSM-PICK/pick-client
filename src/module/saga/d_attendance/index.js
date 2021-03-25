import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  DAttendanceAction,
  DAttendanceActionCreater
} from "../../action/d_attendance";
import { ATTENDANCE } from "../../../lib/requestUrl";
import {
  methodType,
  requestApiWithAccessToken,
  requestGetApiWithAccessToken
} from "../../../lib/requestApi";

function* getSelectAttendanceArr(action) {
  console.log("getSelectAttendanceArr");
  try {
    const { schedule, floor } = action.payload;
    const { SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA } = DAttendanceAction;
    const REQUEST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(schedule, floor);

    const floorData = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    yield put({
      type: SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA,
      payload: floorData
    });
  } catch (error) {}
}

function* successGetSelectAttendanceArr(action) {
  const floorData = action.payload;
  const locationArr = floorData.data.locations;

  const { setSelectAttendanceArr } = DAttendanceActionCreater;

  yield put(setSelectAttendanceArr(locationArr));
}

function* getAttendanceStdData(action) {
  console.log("getAttendanceStdData");
  try {
    const { schedule, floor, priority } = action.payload;

    const REQUEST_URL = ATTENDANCE.ATTENDANCE_LIST_URL(
      schedule,
      floor,
      priority
    );

    const attendanceData = yield call(
      requestGetApiWithAccessToken,
      REQUEST_URL
    );

    const { SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA } = DAttendanceAction;
    yield put({
      type: SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA,
      payload: attendanceData.data
    });
  } catch (error) {}
}
function* successGetAttendanceStdData(action) {
  try {
    const { name, head, attendances, managerTeacher } = action.payload;

    const { setClassInfo, setAttendanceStdData } = DAttendanceActionCreater;

    const stdCount = attendances.length;
    const stdCountWithoutEmployment = attendances.filter(
      stdInfo => stdInfo.state.eight !== "취업"
    ).length;

    yield put(setAttendanceStdData(attendances));
    yield put(
      setClassInfo({
        name,
        head,
        stdCount,
        stdCountWithoutEmployment,
        managerTeacher
      })
    );
  } catch (error) {}
}

function* patchAttendanceStdData(action) {
  try {
    const { number, period, state } = action.payload;
    const REQUEST_URL = ATTENDANCE.CHANGE_ATTENDANCE_STATE_URL();

    const res = yield call(
      requestApiWithAccessToken,
      methodType.PATCH,
      REQUEST_URL,
      {
        number,
        period,
        state
      }
    );
  } catch (error) {}
}

function* getManagedAttendanceArr(action) {
  try {
    const { floor, schedule } = action.payload;

    const REQUEST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(schedule, floor);

    const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    const {
      setManagedClassFloorData,
      setManagedClubFloorData
    } = DAttendanceActionCreater;

    if (schedule === "club") {
      yield put(setManagedClubFloorData(res.data.locations));
    } else {
      yield put(setManagedClassFloorData(res.data.locations));
    }
  } catch (error) {
    console.log(error);
  }
}

function* getManagedClubAttendanceArr(action) {
  try {
    const { floor, schedule } = action.payload;

    const REQUEST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(schedule, floor);

    const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    const {
      setManagedClassFloorData,
      setManagedClubFloorData
    } = DAttendanceActionCreater;

    if (schedule === "club") {
      yield put(setManagedClubFloorData(res.data.locations));
    } else {
      yield put(setManagedClassFloorData(res.data.locations));
    }
  } catch (error) {
    console.log(error);
  }
}

function* putAttendanceStdData(action) {
  try {
    const { numbers, periods, state } = action.payload;
    const REQUEST_URL = ATTENDANCE.CHANGE_ATTENDANCE_STATE_URL();

    const res = yield call(
      requestApiWithAccessToken,
      methodType.PUT,
      REQUEST_URL,
      {
        numbers: Array.isArray(numbers) ? numbers : [numbers],
        periods: Array.isArray(periods) ? periods : [periods],
        state
      }
    );

    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

function* setFirstScheduleAttendanceArr() {
  try {
    const { SET_FIRST_SCHEDULE_ATTENDANCE_ARR } = DAttendanceAction;
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
    console.log(err);
  }
}

function* dAttendanceSaga() {
  const {
    GET_ATTENDANCE_STD_DATA_SAGA,
    SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA,
    FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
    GET_SELECT_ATTENDANCE_ARR_SAGA,
    SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA,
    FAILURE_GET_SELECT_ATTENDANCE_ARR_SAGA,
    PATCH_ATTENDANCE_STD_DATA_SAGA,
    GET_MANAGED_ATTENDANCE_ARR_SAGA,
    GET_MANAGED_CLUB_ATTENDANCE_ARR_SAGA,
    PUT_ATTENDANCE_STD_DATA_SAGA,
    SET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA
  } = DAttendanceAction;

  yield takeLatest(GET_SELECT_ATTENDANCE_ARR_SAGA, getSelectAttendanceArr);
  yield takeLatest(
    SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA,
    successGetSelectAttendanceArr
  );
  // yield takeLatest(
  //   FAILURE_GET_SELECT_ATTENDANCE_ARR_SAGA,
  //   failureGetSelectAttendanceArr
  // );

  yield takeLatest(GET_ATTENDANCE_STD_DATA_SAGA, getAttendanceStdData);
  yield takeLatest(
    SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA,
    successGetAttendanceStdData
  );
  // yield takeLatest(
  //   FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
  //   failureGetAttendanceStdData
  // );

  yield takeLatest(PATCH_ATTENDANCE_STD_DATA_SAGA, patchAttendanceStdData);

  yield takeLatest(GET_MANAGED_ATTENDANCE_ARR_SAGA, getManagedAttendanceArr);
  yield takeLatest(
    GET_MANAGED_CLUB_ATTENDANCE_ARR_SAGA,
    getManagedClubAttendanceArr
  );
  yield takeLatest(PUT_ATTENDANCE_STD_DATA_SAGA, putAttendanceStdData);
  yield takeLatest(
    SET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA,
    setFirstScheduleAttendanceArr
  );
}

export default dAttendanceSaga;
