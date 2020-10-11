const REQUEST_LOGIN = "login/REQUEST_LOGIN";

const requestLogin = payload => ({
  type: REQUEST_LOGIN,
  payload
});

export const loginAction = {
  REQUEST_LOGIN
};

export const loginActionCreater = {
  requestLogin
};
