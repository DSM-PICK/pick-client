import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_ATTENDANCE_CHANGE_LIST,
  GET_ATTENDANCE_CHANGE_STUDENT
} from "../../../action/deskop/report";
import { requestGetApiWithAccessToken } from "../../../../lib/requestApi";
import { PRE_REPORT } from "../../../../lib/requestUrl";
import { makeDate2Digit } from "../../../../lib/attendanceApi";

function* geAttendanceChangeList({ payload }) {
  try {
    const date = new Date(payload);
    const month = date.getMonth() + 1;
    const StringDate = `${date.getFullYear()}-${makeDate2Digit(
      month
    )}-${makeDate2Digit(date.getDate())}`;
    console.log(payload);
    const REQUEST_URL = PRE_REPORT.PRE_REPORT_LIST_URL(StringDate);
    const attendanceChangeList = yield call(
      requestGetApiWithAccessToken,
      REQUEST_URL
    );
    yield put(setPreReportList(attendanceChangeList.data));
  } catch (error) {
    console.log(error);
  }
}

function* desktopReportSaga() {
  yield takeLatest(GET_ATTENDANCE_CHANGE_LIST, geAttendanceChangeList);
}

export default desktopReportSaga;
