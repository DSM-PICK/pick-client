import Axios from "axios";
import { requestApi, requestApiWithAccessToken } from "../../requestApi";

export const getTeacherDate = payload => {
  const { year, month, date } = payload;
  const padMonth = `${month}`.padStart(2, "0");
  const padDate = `${date}`.padStart(2, "0");
  return requestApi(
    "get",
    `/mars/activity/dates/${year}-${padMonth}-${padDate}`
  );
};

export const uploadExcelFile = file => {
  const accessToken = window.localStorage.getItem("accessToken");
  const formData = new FormData();
  formData.append("file", file);
  return Axios.post(
    "https://replica-api.dsm-pick.com/pluto/activity",
    formData,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
};
