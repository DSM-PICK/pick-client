import { requestAdminGetApiWithAccessToken } from "../../../lib/requestApi";

export const getClubFilter = studentName => {
  return requestAdminGetApiWithAccessToken(
    `/venus/clubs/student-name/${studentName}`
  );
};
