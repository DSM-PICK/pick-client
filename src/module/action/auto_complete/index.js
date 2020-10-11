export const SET_TEXT = "auto_complete/SET_TEXT";
export const SET_AUTO_COMPLETE_TEXT = "auto_complete/SET_AUTO_COMPLETE_TEXT";

export const GET_AUTO_COMPLETE_TEXT_SAGA =
  "auto_complete/GET_AUTO_COMPLETE_TEXT_SAGA";
export const FAILURE_AUTO_COMPLETE_TEXT_SAGA = "auto_complete/ERR_AUTO_COMPLETE_TEXT_SAGA";
export const SUCCESS_AUTO_COMPLETE_TEXT_SAGA = "auto_complete/SUCCESS_AUTO_COMPLETE_TEXT_SAGA";

export const setText = payload => ({
  type: SET_TEXT,
  payload
});

export const setAutoCompleteText = payload => ({
  type: SET_AUTO_COMPLETE_TEXT,
  payload
});

export const getAutoCompleteTextSaga = () => ({
  type: GET_AUTO_COMPLETE_TEXT_SAGA
});

export const failureAutoCompleteTextSaga = () => ({
  type: FAILURE_AUTO_COMPLETE_TEXT_SAGA
});

export const successAutoCompleteTextSaga = () => ({
  type: SUCCESS_AUTO_COMPLETE_TEXT_SAGA
});