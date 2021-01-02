import { call, put, takeEvery } from "redux-saga/effects";
import { makeDate2Digit, checkPreReportData } from "../../../lib/attendanceApi";
import { PRE_REPORT } from "../../../lib/requestUrl";
import {
  methodType,
  requestApiWithAccessToken,
  requestGetApiWithAccessToken,
  requestDelApiWithAccessToken,
  requesetRefresh
} from "../../../lib/requestApi";
import {
  setPreReportList,
  GET_PRE_REPORT_LIST_SAGA,
  FAILURE_GET_PRE_REPORT_SAGA,
  CREATE_PRE_REPORT_SAGA,
  FAILURE_CREATE_PRE_REPORT_SAGA,
  DELETE_PRE_REPORT_SAGA,
  FAILURE_DELETE_PRE_REPORT_SAGA,
  INIT_PRE_REPORT_DATA
} from "../../action/pre_report";

function* getPreReportList() {
  try {
    const date = new Date();
    const month = date.getMonth() + 1;
    const todayStr = `${date.getFullYear()}-${makeDate2Digit(
      month
    )}-${makeDate2Digit(date.getDate())}`;
    const REQUEST_URL = PRE_REPORT.PRE_REPORT_LIST_URL(todayStr);

    const preReportList = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    yield put(setPreReportList(preReportList.data));
  } catch (error) {
    // yield put(FAILURE_GET_PRE_REPORT_SAGA(error.response));
    // switch (error) {
    //   case 410:
    //     requesetRefresh();
    // }
  }
}

function* createPreReportSaga(payload) {
  try {
    const {
      state,
      stdnum,
      start_date,
      start_period,
      end_date,
      end_period
    } = payload.payload;
    const REQUEST_URL = PRE_REPORT.CREATE_PRE_REPORT_URL();

    const isDataRight = checkPreReportData(
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

    yield put({ type: INIT_PRE_REPORT_DATA });
    yield put({ type: GET_PRE_REPORT_LIST_SAGA });

    console.log(res);
  } catch (error) {
    // yield put(FAILURE_CREATE_PRE_REPORT_SAGA());
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

function* deletePreReport(payload) {
  try {
    const id = payload.payload;
    const REQUEST_URL = PRE_REPORT.DELETE_PRE_REPORT_URL(id);

    yield call(requestDelApiWithAccessToken, REQUEST_URL);
    yield put({ type: GET_PRE_REPORT_LIST_SAGA });
  } catch (error) {
    // yield put(FAILURE_DELETE_PRE_REPORT_SAGA());
    // console.log(error);
    switch (error) {
      case 410:
        requesetRefresh();
    }
  }
}

function* preReportSaga() {
  yield takeEvery(GET_PRE_REPORT_LIST_SAGA, getPreReportList);
  yield takeEvery(CREATE_PRE_REPORT_SAGA, createPreReportSaga);
  yield takeEvery(DELETE_PRE_REPORT_SAGA, deletePreReport);
}

export default preReportSaga;
