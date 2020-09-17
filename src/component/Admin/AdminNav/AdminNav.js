import React from "react";
import * as S from "./styles";
import AdminNavItem from "./AdminNavItem/AdminNavItem";

const AdminNav = () => {
  const itemDataSet = [
    {
      size: "big",
      imgLink: "/src/asset/Logo/WhiteLogo.svg",
      link: "/admin",
    },
    {
      size: "small",
      text: "동아리",
      link: "/admin/club",
    },
    {
      size: "middle",
      text: "동아리 목록",
      link: "/admin/club/list",
    },
    {
      size: "middle",
      text: "동아리 관리",
      link: "/admin/club/management",
    },
    {
      size: "middle",
      text: "동아리원 관리",
      link: "/admin/club/member",
    },
    {
      size: "small",
      text: "기타",
      link: "/admin/print",
      navlink: true,
    },
    {
      size: "middle",
      text: "출석기록 출력",
      link: "/admin/print",
    },
  ];

  return (
    <S.Container>
      {itemDataSet.map((item) => (
        <AdminNavItem
          key={item.text + item.link}
          text={item.text}
          size={item.size}
          link={item.link}
          imgLink={item.imgLink}
          navlink={item.navlink}
        />
      ))}
      <AdminNavItem text="로그아웃" size="middle" link="" />
    </S.Container>
  );
};

export default AdminNav;
