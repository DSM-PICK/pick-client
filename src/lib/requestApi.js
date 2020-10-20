import axios from "axios";

const BASE_URL = "https://api.dsm-pick.com";

export const methodType = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete"
};
const ACCESS_TOKEN_NAME = "Authorization";

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";
const TEACHER_NAME = "teacherName";

export const requesetRefresh = async () => {
  try {
    const refreshToken = window.localStorage.getItem(REFRESH_TOKEN);
    const res = await axios.get(`${BASE_URL}/saturn/auth/access-token`, {
      headers: {
        [ACCESS_TOKEN_NAME]: refreshToken
      }
    });

    window.localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
  } catch (err) {
    if (err.response.status === 403) {
      alert("인증이 만료되어 재인증이 필요합니다.");
      window.localStorage.clear();
      window.location.href = "/";
    }
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
      location.href = "/";
    }
    if (!isLogin) {
      requesetRefresh();
      console.log("refresh");
    }
  });
};

export const requestGetApiWithAccessToken = async (url, headers) => {
  try {
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN);
    const res = await axios.get(BASE_URL + url, {
      headers: {
        ...headers,
        [ACCESS_TOKEN_NAME]: accessToken
      }
    });
    return res;
  } catch (err) {
    if (!err.response) {
      alert("네트워크 상태를 확인해 주세요");
      throw null;
    }
    switch (err.response.status) {
      case 403:
        requesetRefresh();
      default:
    }
    throw err;
  }
};

export const requestGetApi = async (url, headers) =>
  axios.get(BASE_URL + url, { headers });

export const requestApi = async (method, url, body, headers) => {
  try {
    const res = await axios[method](BASE_URL + url, body, { headers });
    return res;
  } catch (err) {
    if (!err.response) {
      alert("네트워크 상태를 확인해 주세요");
      throw null;
    }

    switch (err.response.status) {
      case 403:
        requesetRefresh();
      default:
    }
    throw err.response;
  }
};

export const requestDeleteApiWithAccessToken = async (url, headers) => {
  try {
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN);
    const res = await axios[methodType.DELETE](BASE_URL + url, {
      headers: {
        ...headers,
        [ACCESS_TOKEN_NAME]: accessToken
      }
    });

    return res;
  } catch (err) {
    if (!err.response) {
      alert("네트워크 상태를 확인해 주세요");
      throw null;
    }
    switch (err.response.status) {
      case 401:
      case 403:
      case 410:
        requesetRefresh();
      default:
    }
    throw err;
  }
};

export const requestApiWithAccessToken = async (method, url, body, headers) => {
  const accessToken = window.localStorage.getItem(ACCESS_TOKEN);

  try {
    const res = await axios[method](BASE_URL + url, body, {
      headers: {
        [ACCESS_TOKEN_NAME]: accessToken,
        ...headers
      }
    });

    return res;
  } catch (err) {
    if (!err.response) {
      alert("네트워크 상태를 확인해 주세요");
      throw null;
    }
    switch (err.response.status) {
      case 401:
      case 403:
      case 410:
        requesetRefresh();
      default:
    }
    throw err;
  }
};

export const Logout = () => {
  try {
    !!window.localStorage.getItem(TEACHER_NAME) &&
      window.localStorage.removeItem(TEACHER_NAME);
    !!window.localStorage.getItem(ACCESS_TOKEN) &&
      window.localStorage.removeItem(ACCESS_TOKEN);
    !!window.localStorage.getItem(REFRESH_TOKEN) &&
      window.localStorage.removeItem(REFRESH_TOKEN);
    window.location.href = "/";
  } catch (err) {
    window.location.href = "/";
  }
};
