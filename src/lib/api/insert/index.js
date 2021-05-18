import { requestAdminApiWithAccessToken } from "../../requestApi";

export const uploadStudent = file => {
  const formData = new FormData();
  formData.append("file", file);

  return requestAdminApiWithAccessToken("post", "/pluto/activity", formData);
};
