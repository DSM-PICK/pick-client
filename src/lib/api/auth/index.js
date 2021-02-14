import { requestApi } from "../../requestApi";

export const reqLogin = payload =>
  requestApi("post", "/saturn/auth/login", payload);

export const reqRegister = payload =>
  requestApi("post", "/saturn/auth/join", {
    ...payload,
    confirmPassword: payload.password
  });
