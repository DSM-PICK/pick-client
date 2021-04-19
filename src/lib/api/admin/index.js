import {
  adminApi,
  requestAdminApiWithAccessToken,
  requestAdminGetApiWithAccessToken
} from "../../../lib/requestApi";

export const getTeachers = teacherName => {
  return adminApi("get", `/venus/teachers/search/${teacherName}`);
};
