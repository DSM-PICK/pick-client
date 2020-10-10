import axios from "axios";
import { call, takeEvery } from "redux-saga/effects";
import {
  SET_PRE_ABSENCE,
  GET_PRE_ABSENCE_SAGA,
  FAILURE_GET_PRE_ABSENCE_SAGA,
  CREATE_PRE_ABSENCE_SAGA,
  FAILURE_CREATE_PRE_ABSENCE_SAGA,
  DELETE_PRE_ABSENCE_SAGA,
  FAILURE_DELETE_PRE_ABSENCE_SAGA
} from "../../action/pre_absence";

function* getPreAbsenceList() {
  const date = new Date();
  const today = `${date.getFullYear()}-${
    month < 10 ? "0" + month : month
  }-${date.getDate()}`;
  try {
    const preAbsenceList = yield call(axios.get, `pre-absence/date/${today}`);
    yield put(SET_PRE_ABSENCE(preAbsenceList));
    console.log("사전 결석 리스트 불러오기 성공");
  } catch (error) {
    yield put(FAILURE_GET_PRE_ABSENCE_SAGA(error.response));
    console.log(error);
    console.log("사전 결석 리스트 불러오기 실패");
  }
}

function* createPreAbsence(payload) {
  try {
    console.log(payload);
    yield call(axios.post, "pre-absence", payload);
    yield put(GET_PRE_ABSENCE_SAGA);
    console.log("사전 결석 리스트 생성 성공");
  } catch (error) {
    yield put(FAILURE_CREATE_PRE_ABSENCE_SAGA());
    console.log(error);
    console.log("사전 결석 리스트 생성 실패");
  }
}

function* deletePreAbsence(payload) {
  try {
    console.log(payload);
    yield call(axios.delete, `pre-absence/${payload}`);
    yield put(GET_PRE_ABSENCE_SAGA);
    console.log("사전 결석 리스트 삭제 성공");
  } catch (error) {
    yield put(FAILURE_DELETE_PRE_ABSENCE_SAGA());
    console.log(error);
    console.log("사전 결석 리스트 삭제 실패");
  }
}

function* preAbsenceSaga() {
  yield takeEvery(GET_PRE_ABSENCE_SAGA, getPreAbsenceList);
  yield takeEvery(CREATE_PRE_ABSENCE_SAGA, createPreAbsence);
  yield takeEvery(DELETE_PRE_ABSENCE_SAGA, deletePreAbsence);
}

export default preAbsenceSaga;
