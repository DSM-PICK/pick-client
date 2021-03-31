import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getLocationState } from "../../../lib/attendanceApi";
import {
  methodType,
  requesetRefresh,
  requestApiWithAccessToken,
  requestGetApiWithAccessToken
} from "../../../lib/requestApi";
import { ATTENDANCE } from "../../../lib/requestUrl";
import {
  setFirstFloorData,
  setSecondFloorData,
  setThirdFloorData,
  setForthFloorData,
  setFirstTeacherName,
  setSecondTeacherName,
  setThirdTeacherName,
  setForthTeacherName,
  setDate,
  setDayOfWeek,
  setAttendanceStdData,
  GET_FLOOR_DATA_SAGA,
  SET_ATTENDANCE_STD_DATA,
  GET_ATTENDANCE_STD_DATA_SAGA,
  FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
  POST_ATTENDANCE_STD_DATA_SAGA,
  FAILURE_POST_ATTENDANCE_STD_DATA_SAGA,
  setHead,
  setSchedule,
  setCurrentClassInfo,
  putAttendanceStdDataSaga,
  PUT_ATTENDANCE_STD_DATA_SAGA,
  PUT_ATTENDANCE_MEMO_SAGA,
  setIsLoading,
  MODIFY_ATTENDANCES_DATA_SAGA
} from "../../action/attendance";

function* getFloorData(payload) {
  try {
    const { locationState, text } = payload.payload;

    let floor = "";
    let setFloorData;
    let setFloorTeacherName;
    switch (text) {
      case "4층":
        floor = 4;
        setFloorData = setForthFloorData;
        setFloorTeacherName = setForthTeacherName;
        break;
      case "3층":
        floor = 3;
        setFloorData = setThirdFloorData;
        setFloorTeacherName = setThirdTeacherName;
        break;
      case "2층":
        floor = 2;
        setFloorData = setSecondFloorData;
        setFloorTeacherName = setSecondTeacherName;
        break;
      case "창조실":
        floor = 1;
        setFloorData = setFirstFloorData;
        setFloorTeacherName = setFirstTeacherName;
        break;
      default:
        throw new Error(
          `getSelfStudyFloorData : payload is not in "4층", "3층", "2층", "창조실"`
        );
    }

    const REQUEST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(
      locationState,
      floor
    );

    const floorData = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    const {
      date,
      schedule,
      dayOfWeek,
      locations,
      teacherName
    } = floorData.data;

    yield put(setDate(date));
    yield put(setSchedule(schedule));
    yield put(setDayOfWeek(dayOfWeek));
    yield put(setFloorData(locations));
    yield put(setFloorTeacherName(teacherName));
  } catch (error) {
    // yield put(FAILURE_GET_SELF_STUDY_FLOOR_DATA_SAGA(error.response));

    switch (error) {
      case 403:
        requesetRefresh();
    }
  }
}

function* getAttendanceStdDataSaga(payload) {
  try {
    const { floor, priority } = payload.payload;
    const REQUEST_URL = ATTENDANCE.ATTENDANCE_LIST_URL(
      getLocationState(),
      floor,
      priority
    );

    yield put(setCurrentClassInfo({ floor, priority }));

    const attendanceData = yield call(
      requestGetApiWithAccessToken,
      REQUEST_URL
    );

    const atdData = attendanceData.data.attendances;
    const clubHead = attendanceData.data.head;

    yield put(setHead(clubHead));
    yield put(setAttendanceStdData(atdData));
  } catch (error) {
    // yield put(FAILURE_GET_ATTENDANCE_STD_DATA_SAGA(error.response));

    console.log(error);

    switch (error) {
      case 403:
        requesetRefresh();
    }
  }
}

function* patchAttendanceStdData(payload) {
  try {
    const { number, period, state, floor, priority } = payload.payload;
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

    // console.log(123);

    // yield put({
    //   type: GET_ATTENDANCE_STD_DATA_SAGA,
    //   payload: { floor, priority }
    // });
  } catch (error) {
    console.log(error);
    // yield put(FAILURE_POST_ATTsENDANCE_STD_DATA_SAGA(error.response));
  }
}

function* putAttendanceStdData(payload) {
  try {
    const { state, numbers, periods, floor, priority } = payload.payload;
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

    // yield put({
    //   type: GET_ATTENDANCE_STD_DATA_SAGA,
    //   payload: { floor, priority }
    // });
  } catch (error) {
    console.log(error);
  }
}

function* putAttendanceMemo(action) {
  try {
    const { memo, numbers, periods } = action.payload;

    const REQUEST_URL = ATTENDANCE.SET_ATTENCANE_MEMO();

    const res = yield call(
      requestApiWithAccessToken,
      methodType.PUT,
      REQUEST_URL,
      {
        memo,
        periods: Array.isArray(periods) ? periods : [periods],
        numbers: Array.isArray(numbers) ? numbers : [numbers]
      }
    );
  } catch (error) {}
}

function* modifyAttendancesData(action) {
  try {
    const { state, memo, numbers, periods } = action.payload;

    const REQUEST_URL = ATTENDANCE.MODIFY_STUDENTS_DATA();

    const res = yield call(
      requestApiWithAccessToken,
      methodType.PUT,
      REQUEST_URL,
      {
        state,
        memo: memo || "",
        numbers: Array.isArray(numbers) ? numbers : [numbers],
        periods: Array.isArray(periods) ? periods : [periods]
      }
    );
  } catch (error) {}
}

function* attendanceSaga() {
  yield takeEvery(PUT_ATTENDANCE_MEMO_SAGA, putAttendanceMemo);
  yield takeEvery(GET_FLOOR_DATA_SAGA, getFloorData);
  yield takeEvery(GET_ATTENDANCE_STD_DATA_SAGA, getAttendanceStdDataSaga);
  yield takeEvery(POST_ATTENDANCE_STD_DATA_SAGA, patchAttendanceStdData);
  yield takeEvery(PUT_ATTENDANCE_STD_DATA_SAGA, putAttendanceStdData);
  yield takeEvery(MODIFY_ATTENDANCES_DATA_SAGA, modifyAttendancesData);
}

export default attendanceSaga;
