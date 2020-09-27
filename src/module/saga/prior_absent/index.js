import Axios from "axios";
import { takeEvery } from "redux-saga/effects";
import {} from "../../action/prior_absent";

function* getPreAbsentList() {
  const date = new Date();
  const today = `${date.getFullYear()}-${
    month < 10 ? "0" + month : month
  }-${date.getDate()}`;
  try {
    const preAbsentList = yield Axios.get("url", {
      date: today
    });
    yield put();
    console.log("사전 결석 리스트 불러오기 성공");
  } catch (error) {
    console.log(error);
    console.log("사전 결석 리스트 불러오기 실패");
  }
}

function* preAbsentSaga() {
  yield takeEvery(GET, getPreAbsentList);
}

export default preAbsentSaga;
