import { takeEvery, put, call } from "redux-saga/effects";
import {
  setAutoCompleteText,
  GET_AUTO_COMPLETE_TEXT_SAGA,
  FAILURE_AUTO_COMPLETE_TEXT_SAGA
} from "../../action/auto_complete";
import { requestGetApiWithAccessToken } from "../../../lib/requestApi";

function* getAutoCompleteTextSaga(payload) {
  try {
    const text = payload.payload;
    console.log(text);
    if (!!text) {
      const autoCompleteData = yield call(
        requestGetApiWithAccessToken,
        `/mars/student/autocomplete/${text}`
      );
      console.log(autoCompleteData);
      yield put(setAutoCompleteText(autoCompleteData.data));
      console.log("자동 완성 성공");
    }
  } catch (error) {
    // yield put(FAILURE_AUTO_COMPLETE_TEXT_SAGA(error.response.status));
    console.log("자동 완성 실패");
    console.log(error);
  }
}

function* autoCompleteSaga() {
  yield takeEvery(GET_AUTO_COMPLETE_TEXT_SAGA, getAutoCompleteTextSaga);
}

export default autoCompleteSaga;
