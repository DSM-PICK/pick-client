import { takeEvery, put, call } from "redux-saga/effects";
import {
  setAutoCompleteText,
  GET_AUTO_COMPLETE_TEXT_SAGA,
  FAILURE_AUTO_COMPLETE_TEXT_SAGA
} from "../../action/auto_complete";
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
      yield put(setAutoCompleteText(autoCompleteData.data));
    } else {
      throw new Error(
        "getAutoCompleteTextSaga : There is no parameter (autocomplete text)."
      );
    }
  } catch (error) {
    // yield put(FAILURE_AUTO_COMPLETE_TEXT_SAGA(error.response.status));
    console.log(error);
    console.log("자동 완성 실패");
  }
}

function* autoCompleteSaga() {
  yield takeEvery(GET_AUTO_COMPLETE_TEXT_SAGA, getAutoCompleteTextSaga);
}

export default autoCompleteSaga;
