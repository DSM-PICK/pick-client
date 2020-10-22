const { takeEvery, put, call } = require("redux-saga/effects");
const {
  GET_MAIN_TEXT_REMAINING_DATE_SAGA,
  setMainTextRemainingDate
} = require("../../action/main_text");
import { getRemainTime } from "../../../lib/attendanceApi";
import { requestGetApiWithAccessToken } from "../../../lib/requestApi";
import { WORKING_TEACHER } from "../../../lib/requestUrl";

function* getMainTextRemainingDate() {
  try {
    const REQUEST_URL = WORKING_TEACHER.REMAINING_DATE_URL();
    const remainingDate = yield call(requestGetApiWithAccessToken, REQUEST_URL);
    yield put(setMainTextRemainingDate(remainingDate.data.remaining_date));

    const REMAIN_DATE = "remainDate";

    window.localStorage.setItem(REMAIN_DATE, remainingDate.data.remaining_date);
  } catch (e) {
    console.log(e);
    console.log(`감독 선생님 일정 공지 확인 실패`);
  }
}

function* mainTextSaga() {
  yield takeEvery(GET_MAIN_TEXT_REMAINING_DATE_SAGA, getMainTextRemainingDate);
}

export default mainTextSaga;
