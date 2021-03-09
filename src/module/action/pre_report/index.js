export const SET_PRE_REPORT_TEXT = "pre_report/SET_PRE_REPORT_TEXT";
export const SET_PRE_REPORT_AUTO_COMPLETE_TEXT =
  "pre_report/SET_PRE_REPORT_AUTO_COMPLETE_TEXT";
export const SET_NAMES = "pre_report/SET_NAMES";
export const DELETE_NAMES = "pre_report/DELETE_NAMES";
export const SET_REASON = "pre_report/SET_REASON";

export const SET_SELECTED_PRE_REPORT_ID =
  "pre_report/SET_SELECTED_PRE_REPORT_ID";

export const SET_PRE_REPORT_LIST = "pre_report/SET_PRE_REPORT_LIST";
export const SET_PRE_REPORT_STATE = "pre_report/SET_PRE_REPORT_STATE";
export const SET_PRE_REPORT_IS_CLICK_PRE_STATE =
  "pre_report/SET_PRE_REPORT_IS_CLICK_PRE_STATE";
export const SET_PRE_REPORT_PRE_DATE = "pre_report/SET_PRE_REPORT_PRE_DATE";
export const SET_PRE_REPORT_NEXT_DATE = "pre_report/SET_PRE_REPORT_NEXT_DATE";
export const INIT_PRE_REPORT_DATA = "pre_report/INIT_PRE_REPORT_DATA";

export const SET_PRE_REPORT_UTILS = "pre_report/SET_PRE_REPORT_UTILS";
export const SET_PRE_REPORT_CALC_DATE = "pre_report/SET_PRE_REPORT_CALC_DATE";
export const SET_PRE_REPORT_CALC_YEAR = "pre_report/SET_PRE_REPORT_CALC_YEAR";
export const SET_PRE_REPORT_CALC_MONTH = "pre_report/SET_PRE_REPORT_CALC_MONTH";
export const SET_PRE_REPORT_CALC_DAY = "pre_report/SET_PRE_REPORT_CALC_DAY";

export const GET_PRE_REPORT_LIST_SAGA = "pre_report/GET_PRE_REPORT_LIST_SAGA";
export const FAILURE_GET_PRE_REPORT_SAGA =
  "pre_report/FAILURE_GET_PRE_REPORT_SAGA";
export const CREATE_PRE_REPORT_SAGA = "pre_report/CREATE_PRE_REPORT_SAGA";
export const FAILURE_CREATE_PRE_REPORT_SAGA =
  "pre_report/FAILURE_CREATE_PRE_REPORT_SAGA";
export const DELETE_PRE_REPORT_SAGA = "pre_report/DELETE_PRE_REPORT_SAGA";
export const FAILURE_DELETE_PRE_REPORT_SAGA =
  "pre_report/FAILURE_DELETE_PRE_REPORT_SAGA";

export const setPreReportText = payload => ({
  type: SET_PRE_REPORT_TEXT,
  payload
});
export const setPreReportAutoCompleteText = payload => ({
  type: SET_PRE_REPORT_AUTO_COMPLETE_TEXT,
  payload
});
export const setNames = payload => ({
  type: SET_NAMES,
  payload
});
export const deleteNames = payload => ({
  type: DELETE_NAMES,
  payload
});
export const setReason = payload => ({
  type: SET_REASON,
  payload
});

export const setSelectedPreReportId = payload => ({
  type: SET_SELECTED_PRE_REPORT_ID,
  payload
});

export const setPreReportList = payload => ({
  type: SET_PRE_REPORT_LIST,
  payload
});
export const setPreReportState = payload => ({
  type: SET_PRE_REPORT_STATE,
  payload
});
export const setPreReportIsClickPreState = payload => ({
  type: SET_PRE_REPORT_IS_CLICK_PRE_STATE,
  payload
});
export const setPreReportPreDate = payload => ({
  type: SET_PRE_REPORT_PRE_DATE,
  payload
});
export const setPreReportNextDate = payload => ({
  type: SET_PRE_REPORT_NEXT_DATE,
  payload
});
export const initPreReportData = () => ({
  type: INIT_PRE_REPORT_DATA
});
export const setPreReportUtils = payload => ({
  type: SET_PRE_REPORT_UTILS,
  payload
});
export const setPreReportCalcDate = payload => ({
  type: SET_PRE_REPORT_CALC_DATE,
  payload
});

export const setPreReportCalcYear = payload => ({
  type: SET_PRE_REPORT_CALC_YEAR,
  payload
});
export const setPreReportCalcMonth = payload => ({
  type: SET_PRE_REPORT_CALC_MONTH,
  payload
});
export const setPreReportCalcDay = payload => ({
  type: SET_PRE_REPORT_CALC_DAY,
  payload
});

export const getPreReportListSaga = payload => ({
  type: GET_PRE_REPORT_LIST_SAGA,
  payload
});
export const failureGetPreReportSaga = payload => ({
  type: FAILURE_GET_PRE_REPORT_SAGA,
  payload
});

export const createPreReportSaga = payload => ({
  type: CREATE_PRE_REPORT_SAGA,
  payload
});
export const failurecreatePreReportSaga = payload => ({
  type: FAILURE_CREATE_PRE_REPORT_SAGA,
  payload
});

export const deletePreReportSaga = payload => ({
  type: DELETE_PRE_REPORT_SAGA,
  payload
});
export const failureDeletePreReportSaga = () => ({
  type: FAILURE_DELETE_PRE_REPORT_SAGA
});
