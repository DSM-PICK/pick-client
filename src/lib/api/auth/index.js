import { requestApi, requestApiErr } from "../../requestApi";

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
    ...payload,
    
  });
};
