export const SET_IS_ACCOUNTED = "signup/SET_IS_ACCOUNTED";

export const SET_LOGIN_ERROR = "signup/SET_LOGIN_ERROR";
export const SET_SIGN_UP_ERROR = "signup/SET_SIGN_UP_ERROR";
export const SET_AUTHENTICATE_ERROR = "signup/SET_AUTHENTICATE_ERROR";

//

export const REQUEST_SIGN_UP_SAGA = "signup/REQUEST_SIGN_UP_SAGA";
export const REQUEST_AUTHENTICATE_SAGA = "signup/REQUEST_AUTHENTICATE_SAGA";

export const setIsAccounted = payload => ({
  type: SET_IS_ACCOUNTED,
  payload
});

export const setLoginError = payload => ({
  type: SET_LOGIN_ERROR,
  payload
});
export const setSignUpError = payload => ({
  type: SET_SIGN_UP_ERROR,
  payload
});
export const setAuthenticateError = payload => ({
  type: SET_AUTHENTICATE_ERROR,
  payload
});

//

export const requestSignUpSaga = payload => ({
  type: REQUEST_SIGN_UP_SAGA,
  payload
});
export const requestAuthenticateSaga = payload => ({
  type: REQUEST_AUTHENTICATE_SAGA,
  payload
});
