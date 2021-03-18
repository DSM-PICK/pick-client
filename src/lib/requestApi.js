import axios from "axios";
import { loginConstant } from "../module/action/login";

// const BASE_URL = "https://api.dsm-pick.com";
const BASE_URL = "https://replica-api.dsm-pick.com";

export const methodType = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch"
};

const ACCESS_TOKEN_NAME = "Authorization";

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";
const TEACHER_NAME = "teacherName";
const REMAIN_DATE = "remainDate";
const REFRESH_ADMIN = "REFRESH_ADMIN";
const JWT_ADMIN = "JWT_ADMIN";

export const requestGetApi = async (url, headers) => {
  try {
    const res = await axios.get(BASE_URL + url, {
      headers
    });

    return res;
  } catch (err) {
    if (!err.response) {
      alert("네트워크 상태를 확인해 주세요");
      throw null;
    }
    throw err.response.status;
  }
};

export const requestDeleteApi = async (url, headers) => {
  try {
    const res = await axios.delete(BASE_URL + url, {
      headers
    });

    return res;
  } catch (err) {
    if (!err.response) {
      alert("네트워크 상태를 확인해 주세요");
      throw null;
    }
    throw err.response.status;
  }
};

export const requestApi = async (method, url, body, headers) => {
  try {
    const res = await axios[method](BASE_URL + url, body, {
      headers
    });

    return res;
  } catch (err) {
    if (!err.response) {
      alert("네트워크 상태를 확인해 주세요");
      throw null;
    }
    throw err.response.status;
  }
};
export const requestApiErr = async (method, url, body, headers) => {
  try {
    const res = await axios[method](BASE_URL + url, body, {
      headers
    });

    return res;
  } catch (err) {
    if (!err.response) {
      alert("네트워크 상태를 확인해 주세요");
      throw null;
    }
    throw err.response;
  }
};

export const requesetRefresh = async callback => {
  try {
    const refreshToken = window.localStorage.getItem(REFRESH_TOKEN);
    const res = await requestGetApi(`/saturn/auth/access-token`, {
      [ACCESS_TOKEN_NAME]: refreshToken
    });
    window.localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
    window.location.href = window.location.href;
  } catch (err) {
    if (err === 403) {
      alert("인증이 만료되어 재인증이 필요합니다.");
      window.localStorage.clear();
      window.location.href = "/t/";
      if (callback) {
        callback();
      }
    }
  }
};

export const requesetRefreshForDesktop = async callback => {
  try {
    const refreshToken = window.localStorage.getItem(REFRESH_TOKEN);
    const res = await requestGetApi(`/saturn/auth/access-token`, {
      [ACCESS_TOKEN_NAME]: refreshToken
    });
    window.localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
    window.location.href = window.location.href;
  } catch (err) {
    if (err === 401) {
      alert("인증이 만료되어 재인증이 필요합니다.");
      window.localStorage.clear();
      window.location.href = "/";
    }
    if (callback) {
      callback();
    }
  }
};

export const requesetAdminRefresh = async () => {
  try {
    const refreshToken = window.localStorage.getItem(
      loginConstant.ADMIN_REFRESH_TOKEN
    );
    const res = await requestApi(
      methodType.PATCH,
      `/venus/auth`,
      {},
      {
        "x-refresh-token": "Bearer " + refreshToken
      }
    );
    window.localStorage.setItem(
      loginConstant.ADMIN_ACCESS_TOKEN,
      res.data.access_token
    );
    console.log(res.data.access_token);
  } catch (errStatus) {
    window.localStorage.clear();
    window.location.href = "/admin/login";
  }
};

export const checkIsLogin = async () => {
  try {
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN);
    await axios.post(
      BASE_URL + "/saturn/auth/token",
      {},
      {
        headers: {
          [ACCESS_TOKEN_NAME]: accessToken
        }
      }
    );

    return true;
  } catch (err) {
    return false;
  }
};

export const checkPageWithLogin = () => {
  checkIsLogin().then(isLogin => {
    if (!window.localStorage.getItem(REFRESH_TOKEN)) {
      alert("로그인이 필요한 서비스입니다.");
      location.href = "/t/";
    } else if (!isLogin) {
      requesetRefresh();
    }
  });
};

export const requestGetApiWithAccessToken = async (url, headers) => {
  try {
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN);
    const res = await requestGetApi(url, {
      [ACCESS_TOKEN_NAME]: accessToken,
      ...headers
    });

    return res;
  } catch (errStatus) {
    switch (errStatus) {
    }

    throw errStatus;
  }
};

export const requestDelApiWithAccessToken = async (url, headers) => {
  const accessToken = window.localStorage.getItem(ACCESS_TOKEN);

  try {
    const res = await requestDeleteApi(url, {
      [ACCESS_TOKEN_NAME]: accessToken,
      ...headers
    });

    return res;
  } catch (errStatus) {
    switch (errStatus) {
      case 403:
    }
    throw errStatus;
  }
};

export const requestDeleteApiWithAccessToken = async (url, headers) => {
  try {
    const accessToken = window.localStorage.getItem(
      loginConstant.ADMIN_ACCESS_TOKEN
    );
    const res = await requestDeleteApi(url, {
      [ACCESS_TOKEN_NAME]: "Bearer " + accessToken,
      ...headers
    });

    return res;
  } catch (errStatus) {
    switch (errStatus) {
    }
    throw errStatus;
  }
};

export const requestApiWithAccessToken = async (method, url, body, headers) => {
  const accessToken = window.localStorage.getItem(ACCESS_TOKEN);

  try {
    const res = await requestApi(method, url, body, {
      [ACCESS_TOKEN_NAME]: accessToken,
      ...headers
    });

    return res;
  } catch (errStatus) {
    throw errStatus;
  }
};

export const requestAdminGetApiWithAccessToken = async (url, headers) => {
  try {
    const accessToken = window.localStorage.getItem(
      loginConstant.ADMIN_ACCESS_TOKEN
    );
    const res = await requestGetApi(url, {
      [ACCESS_TOKEN_NAME]: "Bearer " + accessToken,
      ...headers
    });

    return res;
  } catch (errStatus) {
    switch (errStatus) {
      case 410: {
        requesetAdminRefresh();
      }
      default:
    }
    throw errStatus;
  }
};

export const requestAdminApiWithAccessToken = async (
  method,
  url,
  body,
  headers
) => {
  try {
    const accessToken = window.localStorage.getItem(
      loginConstant.ADMIN_ACCESS_TOKEN
    );
    const res = await requestApi(method, url, body, {
      [ACCESS_TOKEN_NAME]: "Bearer " + accessToken,
      ...headers
    });

    return res;
  } catch (errStatus) {
    switch (errStatus) {
      case 410: {
        requesetAdminRefresh();
      }
      default:
    }
    throw errStatus;
  }
};

export const Logout = state => {
  try {
    if (state === "admin") {
      !!window.localStorage.getItem(JWT_ADMIN) &&
        window.localStorage.removeItem(JWT_ADMIN);
      !!window.localStorage.getItem(REFRESH_ADMIN) &&
        window.localStorage.removeItem(REFRESH_ADMIN);
    } else {
      !!window.localStorage.getItem(REMAIN_DATE) &&
        window.localStorage.removeItem(REMAIN_DATE);
      !!window.localStorage.getItem(TEACHER_NAME) &&
        window.localStorage.removeItem(TEACHER_NAME);
      !!window.localStorage.getItem(ACCESS_TOKEN) &&
        window.localStorage.removeItem(ACCESS_TOKEN);
      !!window.localStorage.getItem(REFRESH_TOKEN) &&
        window.localStorage.removeItem(REFRESH_TOKEN);
    }
  } catch (err) {
  } finally {
    window.location.href = state === "admin" ? "/admin/login" : "/t";
  }
};

export const checkAdminIsLogin = async () => {
  try {
    await requestAdminGetApiWithAccessToken("/venus/auth/check");
    return true;
  } catch (err) {
    return false;
  }
};
