export const SET_PRE_ABSENCE = "pre_absence/SET_PRE_ABSENCE";
export const SET_PRE_ABSENCE_STATE = "pre_absence/SET_PRE_ABSENCE_STATE";
export const SET_PRE_ABSENCE_STD_NAME = "pre_absence/SET_PRE_ABSENCE_STD_NAME";
export const SET_PRE_ABSENCE_PRE_DATE = "pre_absence/SET_PRE_ABSENCE_PRE_DATE";
export const SET_PRE_ABSENCE_NEXT_DATE =
  "pre_absence/SET_PRE_ABSENCE_NEXT_DATE";
export const SET_PRE_ABSENCE_PRE_PERIOD =
  "pre_absence/SET_PRE_ABSENCE_PRE_PERIOD";
export const SET_PRE_ABSENCE_NEXT_PERIOD =
  "pre_absence/SET_PRE_ABSENCE_NEXT_PERIOD";

export const GET_PRE_ABSENCE_SAGA = "pre_absence/GET_PRE_ABSENCE_SAGA";
export const FAILURE_GET_PRE_ABSENCE_SAGA =
  "pre_absence/FAILURE_GET_PRE_ABSENCE_SAGA";
export const CREATE_PRE_ABSENCE_SAGA = "pre_absence/CREATE_PRE_ABSENCE_SAGA";
export const FAILURE_CREATE_PRE_ABSENCE_SAGA =
  "pre_absence/FAILURE_CREATE_PRE_ABSENCE_SAGA";
export const DELETE_PRE_ABSENCE_SAGA = "pre_absence/DELETE_PRE_ABSENCE_SAGA";
export const FAILURE_DELETE_PRE_ABSENCE_SAGA =
  "pre_absence/FAILURE_DELETE_PRE_ABSENCE_SAGA";

export const setPreAbsence = payload => ({
  type: SET_PRE_ABSENCE,
  payload
});

export const setPreReportState = payload => ({
  type: SET_PRE_ABSENCE_STATE,
  payload
});
export const setPreReportStdName = payload => ({
  type: SET_PRE_ABSENCE_STD_NAME,
  payload
});
export const setPreReportPreDate = payload => ({
  type: SET_PRE_ABSENCE_PRE_DATE,
  payload
});
export const setPreReportNextDate = payload => ({
  type: SET_PRE_ABSENCE_NEXT_DATE,
  payload
});
export const setPreReportPrePeriod = payload => ({
  type: SET_PRE_ABSENCE_PRE_PERIOD,
  payload
});
export const setPreReportNextPeriod = payload => ({
  type: SET_PRE_ABSENCE_NEXT_PERIOD,
  payload
});

export const getPreAbsenceSaga = payload => ({
  type: GET_PRE_ABSENCE_SAGA,
  payload
});

export const failureGetPreAbsenceSaga = payload => ({
  type: FAILURE_GET_PRE_ABSENCE_SAGA,
  payload
});

export const createPreAbsenceSaga = payload => ({
  type: CREATE_PRE_ABSENCE_SAGA,
  payload
});

export const failurecreatePreAbsenceSaga = payload => ({
  type: FAILURE_CREATE_PRE_ABSENCE_SAGA,
  payload
});

export const deletePreAbsenceSaga = payload => ({
  type: DELETE_PRE_ABSENCE_SAGA,
  payload
});

export const failureDeletePreAbsenceSaga = () => ({
  type: FAILURE_DELETE_PRE_ABSENCE_SAGA
});
