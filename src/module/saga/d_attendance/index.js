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
    const { setSelectAttendanceArr } = DAttendanceActionCreater;
    const REQUEST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(schedule, floor);

    const floorData = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    const locationsArr = floorData.data.locations;

    yield put(setSelectAttendanceArr(locationsArr));
  } catch (error) {}
}

function* dAttendanceSaga() {
  const { GET_SELECT_ATTENDANCE_ARR_SAGA } = DAttendanceAction;
  yield takeEvery(GET_SELECT_ATTENDANCE_ARR_SAGA, getSelectAttendanceArr);
}

export default dAttendanceSaga;
