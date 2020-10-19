export const GET_AUTO_COMPLETE_TEXT_SAGA =
  "auto_complete/GET_AUTO_COMPLETE_TEXT_SAGA";
export const FAILURE_AUTO_COMPLETE_TEXT_SAGA =
  "auto_complete/ERR_AUTO_COMPLETE_TEXT_SAGA";
export const SUCCESS_AUTO_COMPLETE_TEXT_SAGA =
  "auto_complete/SUCCESS_AUTO_COMPLETE_TEXT_SAGA";

export const getAutoCompleteTextSaga = payload => ({
  type: GET_AUTO_COMPLETE_TEXT_SAGA,
  payload
});

export const failureAutoCompleteTextSaga = () => ({
  type: FAILURE_AUTO_COMPLETE_TEXT_SAGA
});

export const successAutoCompleteTextSaga = () => ({
  type: SUCCESS_AUTO_COMPLETE_TEXT_SAGA
});
