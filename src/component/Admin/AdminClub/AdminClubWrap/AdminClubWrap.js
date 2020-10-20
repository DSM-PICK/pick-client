import React from "react";
import * as S from "./styles";
import AdminClubItem from "./AdminClubItem/AdminClubItem";
import {
  AdminClub1,
  AdminClub2,
  AdminClub3
} from "../../../../asset/Admin/Admin";

const AdminClubWrap = () => {
  const ItemDatas = [
    {
      url: "/admin/club/list",
      title: "동아리 목록",
      text: "동아리 목록을 확인할 수 있습니다.",
      imglink: AdminClub1
    },
    {
      url: "/admin/club/management",
      title: "동아리 관리",
      text:
        "동아리를 추가, 삭제하거나 동아리명과  동아리실을 변경할 수 있습니다.",
      imglink: AdminClub2
    },
    {
      url: "/admin/club/member",
      title: "동아리원 관리",
      text: "동아리원을 이동, 삭제할 수 있습니다.",
      imglink: AdminClub3
    }
  ];

  return (
    <S.Container>
      {ItemDatas.map(data => (
        <AdminClubItem
          key={data.title}
          url={data.url}
          title={data.title}
          text={data.text}
          imglink={data.imglink}
        />
      ))}
    </S.Container>
  );
};

export default AdminClubWrap;
