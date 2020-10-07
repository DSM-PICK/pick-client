import axios from "axios";

const BASE_URL = "http://api.dsm-pick.com";

export const methodType = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete"
};

export const requestGetApiWithAccessToken = async (url, headers) =>
  axios.get(BASE_URL + url, { headers });

export const requestGetApi = async (method, url, headers) =>
  axios.get(BASE_URL + url, { headers });

export const requestApi = async (method, url, body, headers) => {
  try {
    const res = await axios[method](BASE_URL + url, body, { headers });
    return res;
  } catch (err) {
    !err.response && alert("네트워크 상태를 확인해 주세요");
    throw err.response;
  }
};

export const requestApiWithAccessToken = async (method, url, body, headers) => {
  try {
    const { data } = await axios[method](BASE_URL + url, body, {
      headers
    });

    return data;
  } catch (err) {}
};

// export const isLogined = async();
