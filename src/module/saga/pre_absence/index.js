import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  methodType,
  requestApiWithAccessToken,
  requestGetApiWithAccessToken,
  requestDeleteApiWithAccessToken
} from "../../../lib/requestApi";
import {
  setPreAbsence,
  GET_PRE_ABSENCE_SAGA,
  FAILURE_GET_PRE_ABSENCE_SAGA,
  CREATE_PRE_ABSENCE_SAGA,
  FAILURE_CREATE_PRE_ABSENCE_SAGA,
  DELETE_PRE_ABSENCE_SAGA,
  FAILURE_DELETE_PRE_ABSENCE_SAGA
} from "../../action/pre_absence";

function* getPreAbsenceList() {
  try {
    const date = new Date();
    let month = date.getMonth() + 1;
    const today = `${date.getFullYear()}-${
      month < 10 ? "0" + month : month
    }-${date.getDate()}`;
    const preAbsenceList = yield call(
      requestGetApiWithAccessToken,
      `/mars/pre-absence/date/${today}`
    );
    console.log(preAbsenceList);
    yield put(setPreAbsence(preAbsenceList.data));
    console.log("사전 결석 리스트 불러오기 성공");
  } catch (error) {
    // yield put(FAILURE_GET_PRE_ABSENCE_SAGA(error.response));
    console.log(error);
    console.log("사전 결석 리스트 불러오기 실패");
  }
}

function* createPreAbsenceSaga(payload) {
  try {
    const {
      state,
      stdnum,
      start_date,
      start_period,
      end_date,
      end_period
    } = payload.payload;

    const res = yield call(
      requestApiWithAccessToken,
      methodType.POST,
      "/mars/pre-absence",
      {
        state,
        stdnum,
        start_date,
        start_period,
        end_date,
        end_period
      }
    );
    yield put({ type: GET_PRE_ABSENCE_SAGA });
    console.log("사전 결석 리스트 생성 성공");
  } catch (error) {
    // yield put(FAILURE_CREATE_PRE_ABSENCE_SAGA());
    console.log(error);
    console.log("사전 결석 리스트 생성 실패");
  }
}

function* deletePreAbsence(payload) {
  try {
    console.log(`deletePreAbsence`);
    const id = payload.payload;

    yield call(requestDeleteApiWithAccessToken, `/mars/pre-absence/${id}`);
    yield put({ type: GET_PRE_ABSENCE_SAGA });
    console.log(`${id} 사전 결석 리스트 삭제 성공`);
  } catch (error) {
    // yield put(FAILURE_DELETE_PRE_ABSENCE_SAGA());
    console.log(error);
    console.log("사전 결석 리스트 삭제 실패");
  }
}

function* preAbsenceSaga() {
  yield takeEvery(GET_PRE_ABSENCE_SAGA, getPreAbsenceList);
  yield takeEvery(CREATE_PRE_ABSENCE_SAGA, createPreAbsenceSaga);
  yield takeEvery(DELETE_PRE_ABSENCE_SAGA, deletePreAbsence);
}

export default preAbsenceSaga;
