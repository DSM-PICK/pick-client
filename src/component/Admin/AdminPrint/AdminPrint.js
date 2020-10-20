import React from "react";
import { AdminClubDownload, AdminPrintSvg } from "../../../asset/Admin/Admin";
import AdminBody from "../AdminBody/AdminBody";
import AdminBodyFunc from "../AdminBody/AdminBodyFunc/AdminBodyFunc";
import AdminBodyTitle from "../AdminBody/AdminBodyTitle/AdminBodyTitle";
import * as S from "./styles";

const AdminPrint = () => {
  return (
    <S.Container>
      <AdminBody>
        <AdminBodyTitle title="출석기록 출력" />
        <AdminBodyFunc>
          <S.AbsoluteBackground>
            <S.AbsoluteImg imglink={AdminPrintSvg} />
            <S.DownloadTag>
              <S.DownloadImg imglink={AdminClubDownload}></S.DownloadImg>
              <S.DownloadBtn type="button" value="파일 다운로드" />
            </S.DownloadTag>
          </S.AbsoluteBackground>
        </AdminBodyFunc>
      </AdminBody>
    </S.Container>
  );
};

export default AdminPrint;
