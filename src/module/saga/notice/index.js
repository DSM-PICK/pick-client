import { call, put, takeEvery } from "redux-saga/effects";
import { requestGetApiWithAccessToken } from "../../../lib/requestApi";
import { NOTICE_LIST } from "../../../lib/REQUEST_URL";
import {
  GET_NOTICE_LIST_SAGA,
  SET_MEMBER_NOTICE_LIST
} from "../../action/notice";

function* getNoticeListSaga() {
  try {
    console.log("getNoticeListSaga");
    const REQUEST_URL = NOTICE_LIST.NOTICE_LIST_URL();

    const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    console.log(res);

    // yield put({ type: SET_MEMBER_NOTICE_LIST, payload: res.})
  } catch (err) {
    console.log(err);
  }
}

function* noticeSaga() {
  yield takeEvery(GET_NOTICE_LIST_SAGA, getNoticeListSaga);
}

export default noticeSaga;
