export const SET_MAIN_TEXT_NAME = "main_text/SET_MAIN_TEXT_NAME";
export const SET_MAIN_TEXT_DATE = "main_text/SET_MAIN_TEXT_DATE";
export const SET_MAIN_TEXT_REMAIN_TIME = "main_text/SET_MAIN_TEXT_REMAIN_TIME";

export const setMainText = payload => ({
  type: SET_MAIN_TEXT_NAME,
  payload
});
export const setMainTextDate = payload => ({
  type: SET_MAIN_TEXT_DATE,
  payload
});
export const setMainTextRemainTime = payload => ({
  type: SET_MAIN_TEXT_REMAIN_TIME,
  payload
});
