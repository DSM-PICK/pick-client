import { requestApi, requestApiErr } from "../../requestApi";

export const reqLogin = payload =>
  requestApi("post", "/saturn/auth/login", payload);

export const reqRegister = payload =>
  requestApiErr("post", "/saturn/auth/join", {
    ...payload,
    confirmPassword: payload.password
  });
