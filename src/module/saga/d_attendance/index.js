import { call, put, takeEvery } from "redux-saga/effects";
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

    console.log("attendanceData");
    console.log(attendanceData);

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

    const { setClassInfo, setAttendanceStdData } = DAttendanceActionCreater;

    const stdCount = attendances.length;
    const stdCountWithoutEmployment = attendances.filter(
      stdInfo => stdInfo.state.eight !== "취업"
    ).length;
    console.log("{ name, head, stdCount, stdCountWithoutEmployment }");
    console.log({ name, head, stdCount, stdCountWithoutEmployment });
    yield put(setAttendanceStdData(attendances));
    yield put(
      setClassInfo({ name, head, stdCount, stdCountWithoutEmployment })
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

function* dAttendanceSaga() {
  const {
    GET_ATTENDANCE_STD_DATA_SAGA,
    SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA,
    FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
    GET_SELECT_ATTENDANCE_ARR_SAGA,
    SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA,
    FAILURE_GET_SELECT_ATTENDANCE_ARR_SAGA,
    PATCH_ATTENDANCE_STD_DATA_SAGA
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

  yield takeEvery(PATCH_ATTENDANCE_STD_DATA_SAGA, patchAttendanceStdData);
}

export default dAttendanceSaga;
