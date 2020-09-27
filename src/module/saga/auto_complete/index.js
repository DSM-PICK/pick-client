import { takeEvery, select, put, call } from "redux-saga/effects";
import Axios from "axios";
import {
  SET_TEXT,
  SET_AUTO_COMPLETE_TEXT,
  GET_AUTO_COMPLETE_TEXT_SAGA,
  ERR_AUTO_COMPLETE_TEXT
} from "../../action/auto_complete";

function* getAutoCompleteText() {
  try {
    const text = yield select(store => store.autoComplete.text);
    const autoCompleteData = yield Axios.post("url", {
      data: text
    });
    yield put(SET_AUTO_COMPLETE_TEXT(autoCompleteData));
    console.log("자동 완성 성공");
  } catch (error) {
    yield put(ERR_AUTO_COMPLETE_TEXT(error.response.status));
    console.log("자동 완성 실패");
    console.log(error);
  }
}

function* autoCompleteSaga() {
  yield takeEvery(GET_AUTO_COMPLETE_TEXT_SAGA, getAutoCompleteText);
}

export default autoCompleteSaga;
