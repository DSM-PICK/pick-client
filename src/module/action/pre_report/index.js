export const SET_PRE_REPORT_STATE = "pre_report/SET_PRE_REPORT_STATE";
export const SET_PRE_REPORT_STD_NAME = "pre_report/SET_PRE_REPORT_STD_NAME";
export const SET_PRE_REPORT_PRE_DATE = "pre_report/SET_PRE_REPORT_PRE_DATE";
export const SET_PRE_REPORT_NEXT_DATE = "pre_report/SET_PRE_REPORT_NEXT_DATE";

export const setPreReportState = payload => ({
  type: SET_PRE_REPORT_STATE,
  payload
});
export const setPreReportStdName = payload => ({
  type: SET_PRE_REPORT_STD_NAME,
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
