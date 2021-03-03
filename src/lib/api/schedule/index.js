import { requestApi } from "../../requestApi";

export const getTeacherDate = payload => {
  const { year, month, date } = payload;
  const padMonth = `${month}`.padStart(2, "0");
  const padDate = `${date}`.padStart(2, "0");
  return requestApi(
    "get",
    `/mars/activity/dates/${year}-${padMonth}-${padDate}`
  );
};
