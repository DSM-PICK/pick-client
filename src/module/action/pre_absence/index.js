export const SET_PRE_ABSENCE_TEXT = "pre_absence/SET_PRE_ABSENCE_TEXT";
export const SET_PRE_ABSENCE_AUTO_COMPLETE_TEXT =
  "pre_absence/SET_PRE_ABSENCE_AUTO_COMPLETE_TEXT";

export const SET_PRE_ABSENCE_LIST = "pre_absence/SET_PRE_ABSENCE_LIST";
export const SET_PRE_ABSENCE_STATE = "pre_absence/SET_PRE_ABSENCE_STATE";
export const SET_PRE_ABSENCE_PRE_DATE = "pre_absence/SET_PRE_ABSENCE_PRE_DATE";
export const SET_PRE_ABSENCE_NEXT_DATE =
  "pre_absence/SET_PRE_ABSENCE_NEXT_DATE";
export const INIT_PRE_ABSENCE_DATA = "pre_absence/INIT_PRE_ABSENCE_DATA";

export const GET_PRE_ABSENCE_LIST_SAGA =
  "pre_absence/GET_PRE_ABSENCE_LIST_SAGA";
export const FAILURE_GET_PRE_ABSENCE_SAGA =
  "pre_absence/FAILURE_GET_PRE_ABSENCE_SAGA";
export const CREATE_PRE_ABSENCE_SAGA = "pre_absence/CREATE_PRE_ABSENCE_SAGA";
export const FAILURE_CREATE_PRE_ABSENCE_SAGA =
  "pre_absence/FAILURE_CREATE_PRE_ABSENCE_SAGA";
export const DELETE_PRE_ABSENCE_SAGA = "pre_absence/DELETE_PRE_ABSENCE_SAGA";
export const FAILURE_DELETE_PRE_ABSENCE_SAGA =
  "pre_absence/FAILURE_DELETE_PRE_ABSENCE_SAGA";

export const setPreAbsenceText = payload => ({
  type: SET_PRE_ABSENCE_TEXT,
  payload
});

export const setPreAbsenceAutoCompleteText = payload => ({
  type: SET_PRE_ABSENCE_AUTO_COMPLETE_TEXT,
  payload
});

export const setPreAbsenceList = payload => ({
  type: SET_PRE_ABSENCE_LIST,
  payload
});
export const setPreAbsenceState = payload => ({
  type: SET_PRE_ABSENCE_STATE,
  payload
});
export const setPreAbsencePreDate = payload => ({
  type: SET_PRE_ABSENCE_PRE_DATE,
  payload
});
export const setPreAbsenceNextDate = payload => ({
  type: SET_PRE_ABSENCE_NEXT_DATE,
  payload
});
export const initPreAbsenceData = () => ({
  type: INIT_PRE_ABSENCE_DATA
});

export const getPreAbsenceListSaga = payload => ({
  type: GET_PRE_ABSENCE_LIST_SAGA,
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
