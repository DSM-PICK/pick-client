import { put, takeEvery } from "redux-saga/effects";
import {
  DAttendanceAction,
  DAttendanceActionCreater
} from "../../action/d_attendance";

function* getSelectAttendanceArr() {
  const { setSelectAttendanceArr } = DAttendanceActionCreater;

  const STATIC_DATA = [];

  yield put(setSelectAttendanceArr());
}

function* dAttendanceSaga() {
  const { GET_SELECT_ATTENDANCE_ARR_SAGA } = DAttendanceAction;
  yield takeEvery(GET_SELECT_ATTENDANCE_ARR_SAGA, getSelectAttendanceArr);
}

export default dAttendanceSaga;
