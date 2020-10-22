export const SET_SUB_TEXT = "main_text/SET_SUB_TEXT";
export const SET_MAIN_TEXT_REMAINING_DATE =
  "main_text/SET_MAIN_TEXT_REMAINING_DATE";
export const SET_MAIN_TEXT = "main_text/SET_MAIN_TEXT";

export const GET_MAIN_TEXT_REMAINING_DATE_SAGA =
  "main_text/GET_MAIN_TEXT_REMAINING_DATE_SAGA";

export const setSubText = payload => ({
  type: SET_SUB_TEXT,
  payload
});
export const setMainText = payload => ({
  type: SET_MAIN_TEXT,
  payload
});
export const setMainTextRemainingDate = payload => ({
  type: SET_MAIN_TEXT_REMAINING_DATE,
  payload
});

export const getMainTextRemainingDateSaga = () => ({
  type: GET_MAIN_TEXT_REMAINING_DATE_SAGA
});
