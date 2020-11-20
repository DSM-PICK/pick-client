import { call, put, takeEvery } from "redux-saga/effects";
import {
  makeDate2Digit,
  checkPreAbsenceData
} from "../../../lib/attendanceApi";
import { PRE_ABSENCE } from "../../../lib/requestUrl";
import {
  methodType,
  requestApiWithAccessToken,
  requestGetApiWithAccessToken,
  requestDelApiWithAccessToken,
  requesetRefresh
} from "../../../lib/requestApi";
import {
  setPreAbsenceList,
  GET_PRE_ABSENCE_LIST_SAGA,
  FAILURE_GET_PRE_ABSENCE_SAGA,
  CREATE_PRE_ABSENCE_SAGA,
  FAILURE_CREATE_PRE_ABSENCE_SAGA,
  DELETE_PRE_ABSENCE_SAGA,
  FAILURE_DELETE_PRE_ABSENCE_SAGA,
  INIT_PRE_ABSENCE_DATA
} from "../../action/pre_absence";

function* getPreAbsenceList() {
  try {
    const date = new Date();
    const month = date.getMonth() + 1;
    const todayStr = `${date.getFullYear()}-${makeDate2Digit(
      month
    )}-${makeDate2Digit(date.getDate())}`;
    const REQUEST_URL = PRE_ABSENCE.PRE_ABSENCE_LIST_URL(todayStr);

    const preAbsenceList = yield call(
      requestGetApiWithAccessToken,
      REQUEST_URL
    );

    yield put(setPreAbsenceList(preAbsenceList.data));
  } catch (error) {
    // yield put(FAILURE_GET_PRE_ABSENCE_SAGA(error.response));
    // switch (error) {
    //   case 410:
    //     requesetRefresh();
    // }
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
    const REQUEST_URL = PRE_ABSENCE.CREATE_PRE_ABSENCE_URL();

    const isDataRight = checkPreAbsenceData(
      state,
      stdnum,
      start_date,
      start_period,
      end_date,
      end_period
    );

    const res = yield call(
      requestApiWithAccessToken,
      methodType.POST,
      REQUEST_URL,
      {
        state,
        stdnum,
        start_date,
        start_period,
        end_date,
        end_period
      }
    );

    yield put({ type: GET_PRE_ABSENCE_LIST_SAGA });
    yield put({ type: INIT_PRE_ABSENCE_DATA });
  } catch (error) {
    // yield put(FAILURE_CREATE_PRE_ABSENCE_SAGA());
    switch (error) {
      case 404:
        alert("사전 신고를 실패했습니다.");
        break;
      case 409:
        alert("사전 신고 기간이 겹칩니다.");
        break;
      case 410:
        requesetRefresh();
        break;
    }
    if (!error) {
      alert("사전 신고를 실패했습니다.");
    }
  }
}

function* deletePreAbsence(payload) {
  try {
    const id = payload.payload;
    const REQUEST_URL = PRE_ABSENCE.DELETE_PRE_ABSENCE_URL(id);

    yield call(requestDelApiWithAccessToken, REQUEST_URL);
    yield put({ type: GET_PRE_ABSENCE_LIST_SAGA });
  } catch (error) {
    // yield put(FAILURE_DELETE_PRE_ABSENCE_SAGA());
    // console.log(error);
    switch (error) {
      case 410:
        requesetRefresh();
    }
  }
}

function* preReportSaga() {
  yield takeEvery(GET_PRE_ABSENCE_LIST_SAGA, getPreAbsenceList);
  yield takeEvery(CREATE_PRE_ABSENCE_SAGA, createPreAbsenceSaga);
  yield takeEvery(DELETE_PRE_ABSENCE_SAGA, deletePreAbsence);
}

export default preReportSaga;
