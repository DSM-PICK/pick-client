import React from "react";
import * as S from "./styles";
import AdminNav from "../AdminNav/AdminNav";
import AdminBody from "../AdminBody/AdminBody";
import AdminBodyFunc from "../AdminBody/AdminBodyFunc/AdminBodyFunc";
import AdminBodyTitle from "../AdminBody/AdminBodyTitle/AdminBodyTitle";
import AdminClubWrap from "./AdminClubWrap/AdminClubWrap";

const AdminClub = () => {
  return (
    <S.Container>
      <AdminBody>
        <AdminBodyTitle title="동아리" />
        <AdminBodyFunc>
          <AdminClubWrap />
        </AdminBodyFunc>
      </AdminBody>
    </S.Container>
  );
};

export default AdminClub;
