import React from "react";
import * as S from "./styles";
import AdminBody from "../AdminBody/AdminBody";
import AdminBodyTitle from "../AdminBody/AdminBodyTitle/AdminBodyTitle";
import AdminBodyFunc from "../AdminBody/AdminBodyFunc/AdminBodyFunc";
import AdminMainText from "./AdminMainText/AdminMainText";
import AdminMainImgWrap from "./AdminMainImgWrap/AdminMainImgWrap";
import { LogoForAdmin } from "../../../asset/index";

const AdminMain = () => {
  return (
    <S.Container>
      <AdminBody>
        <AdminBodyTitle imglink={LogoForAdmin} />
        <AdminBodyFunc>
          <AdminMainText />
          <AdminMainImgWrap />
        </AdminBodyFunc>
      </AdminBody>
    </S.Container>
  );
};

export default AdminMain;
