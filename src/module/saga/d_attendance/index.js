import { call, put, takeEvery } from "redux-saga/effects";
import {
  DAttendanceAction,
  DAttendanceActionCreater
} from "../../action/d_attendance";
import { ATTENDANCE } from "../../../lib/requestUrl";
import { requestGetApiWithAccessToken } from "../../../lib/requestApi";

function* getSelectAttendanceArr(action) {
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
    const { name, head, attendances } = action.payload;

    const { setAttendanceStdData } = DAttendanceActionCreater;

    yield put(setAttendanceStdData(attendances));
  } catch (error) {}
}

function* dAttendanceSaga() {
  const {
    GET_ATTENDANCE_STD_DATA_SAGA,
    SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA,
    FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
    GET_SELECT_ATTENDANCE_ARR_SAGA,
    SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA,
    FAILURE_GET_SELECT_ATTENDANCE_ARR_SAGA
  } = DAttendanceAction;

  yield takeEvery(GET_SELECT_ATTENDANCE_ARR_SAGA, getSelectAttendanceArr);
  yield takeEvery(
    SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA,
    successGetSelectAttendanceArr
  );
  // yield takeEvery(
  //   FAILURE_GET_SELECT_ATTENDANCE_ARR_SAGA,
  //   failureGetSelectAttendanceArr
  // );

  yield takeEvery(GET_ATTENDANCE_STD_DATA_SAGA, getAttendanceStdData);
  yield takeEvery(
    SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA,
    successGetAttendanceStdData
  );
  // yield takeEvery(
  //   FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
  //   failureGetAttendanceStdData
  // );
}

export default dAttendanceSaga;
