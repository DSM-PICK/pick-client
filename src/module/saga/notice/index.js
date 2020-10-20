import { call, put, takeEvery } from "redux-saga/effects";
import { requestGetApiWithAccessToken } from "../../../lib/requestApi";
import { NOTICE_LIST } from "../../../lib/requestUrl";
import {
  GET_NOTICE_LIST_SAGA,
  SET_CLUB_NOTICE_LIST,
  SET_MEMBER_NOTICE_LIST
} from "../../action/notice";

function* getNoticeListSaga() {
  try {
    const REQUEST_URL = NOTICE_LIST.NOTICE_LIST_URL();

    const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);
    const { memberList, clubList } = res.data;

    yield put({ type: SET_MEMBER_NOTICE_LIST, payload: memberList });
    yield put({ type: SET_CLUB_NOTICE_LIST, payload: clubList });
  } catch (err) {
    console.log(err);
  }
}

function* noticeSaga() {
  yield takeEvery(GET_NOTICE_LIST_SAGA, getNoticeListSaga);
}

export default noticeSaga;
