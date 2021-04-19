import {
  requestApi,
  requestApiErr,
  requestApiWithAccessToken
} from "../../requestApi";

export const reqLogin = payload =>
  requestApi("post", "/saturn/auth/login", payload);

export const reqRegister = payload =>
  requestApiErr("post", "/saturn/auth/join", {
    ...payload,
    confirmPassword: payload.password
  });

export const reqCheckCode = payload =>
  requestApiErr("post", "/saturn/auth/authentication-number", {
    authenticationNumber: payload
  });

export const reqChangePassword = payload => {
  return requestApiErr("patch", "/saturn/auth/password", {
    ...payload
  });
};

export const getRoom = payload => {
  return requestApiWithAccessToken("get", `/mars/class?name-like=${payload}`);
};
