const ADMIN_ACCESS_TOKEN = "JWT_ADMIN";
const ADMIN_REFRESH_TOKEN = "REFRESH_ADMIN";

const REQUEST_LOGIN = "login/REQUEST_LOGIN";
const REQUEST_ADMIN_LOGIN_SAGA = "login/REQUEST_ADMIN_LOGIN_SAGA";

const requestLogin = payload => ({
  type: REQUEST_LOGIN,
  payload
});

const requestAdminLoginSaga = payload => ({
  type: REQUEST_ADMIN_LOGIN_SAGA,
  payload
});

export const loginConstant = {
  ADMIN_ACCESS_TOKEN,
  ADMIN_REFRESH_TOKEN
};

export const loginAction = {
  REQUEST_LOGIN,
  REQUEST_ADMIN_LOGIN_SAGA
};

export const loginActionCreater = {
  requestLogin,
  requestAdminLoginSaga
};
