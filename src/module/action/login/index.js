const REQUEST_LOGIN = "login/REQUEST_LOGIN";
const SUCCESS_LOGIN = "login/SUCCESS_LOGIN";

const requestLogin = payload => ({
  type: REQUEST_LOGIN,
  payload
});

const successLogin = payload => ({
  type: SUCCESS_LOGIN,
  payload
});

export const loginAction = {
  REQUEST_LOGIN,
  SUCCESS_LOGIN
};

export const loginActionCreater = {
  requestLogin,
  successLogin
};
