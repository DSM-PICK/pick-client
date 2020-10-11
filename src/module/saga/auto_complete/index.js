import { takeEvery, select, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  SET_AUTO_COMPLETE_TEXT,
  GET_AUTO_COMPLETE_TEXT_SAGA,
  FAILURE_AUTO_COMPLETE_TEXT_SAGA
} from "../../action/auto_complete";

function* getAutoCompleteText() {
  try {
    const text = yield select(store => store.autoComplete.text);
    const autoCompleteData = yield call(
      axios.get,
      `student/autocomplete/${text}`
    );
    yield put(SET_AUTO_COMPLETE_TEXT(autoCompleteData));
    console.log("자동 완성 성공");
  } catch (error) {
    yield put(FAILURE_AUTO_COMPLETE_TEXT_SAGA(error.response.status));
    console.log("자동 완성 실패");
    console.log(error);
  }
}

function* autoCompleteSaga() {
  yield takeEvery(GET_AUTO_COMPLETE_TEXT_SAGA, getAutoCompleteText);
}

export default autoCompleteSaga;
