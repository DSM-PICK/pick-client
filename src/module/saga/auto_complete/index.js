import { takeEvery, put, call } from "redux-saga/effects";
import {
  GET_AUTO_COMPLETE_TEXT_SAGA,
  FAILURE_AUTO_COMPLETE_TEXT_SAGA
} from "../../action/auto_complete";
import { setPreReportAutoCompleteText } from "../../action/pre_report";
import { requestGetApiWithAccessToken } from "../../../lib/requestApi";
import { AUTO_COMPLETE } from "../../../lib/requestUrl";

function* getAutoCompleteTextSaga(payload) {
  try {
    const text = payload.payload;

    const REQUEST_URL = AUTO_COMPLETE.AUTO_COMPLETE_STUDENT_URL(text);

    if (!!text) {
      const autoCompleteData = yield call(
        requestGetApiWithAccessToken,
        REQUEST_URL
      );
      yield put(setPreReportAutoCompleteText(autoCompleteData.data));
    } else {
      yield put(setPreReportAutoCompleteText(""));
    }
  } catch (error) {}
}

function* autoCompleteSaga() {
  yield takeEvery(GET_AUTO_COMPLETE_TEXT_SAGA, getAutoCompleteTextSaga);
}

export default autoCompleteSaga;
