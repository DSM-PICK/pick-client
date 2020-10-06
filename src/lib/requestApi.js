import axios from "axios";

const BASE_URL = "http://api.dsm-pick.com";
export const requestGetApiWithAccessToken = async (url, headers) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers
    });
    return data;
  } catch (err) {}
};

export const requestGetApi = async (method, url, headers) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers
    });

    return data;
  } catch (err) {}
};

export const requestApi = async (method, url, body, headers) => {
  try {
    const res = await axios[method](BASE_URL + url, body, {
      headers
    });

    return res;
  } catch (err) {}
};

export const requestApiWithAccessToken = async (method, url, body, headers) => {
  try {
    const { data } = await axios[method](BASE_URL + url, body, {
      headers
    });

    return data;
  } catch (err) {}
};
