import React from "react";
import * as S from "./styles";
import {
  AdminMain1,
  AdminMain2,
  AdminMain3,
  AdminMain4
} from "../../../../asset/Admin/Admin";

const AdminMainImgWrap = () => {
  const imglinks = [AdminMain1, AdminMain2, AdminMain3, AdminMain4];

  return (
    <S.Container>
      {imglinks.map(imglink => (
        <S.Img key={imglink} imglink={imglink} />
      ))}
    </S.Container>
  );
};

export default AdminMainImgWrap;
