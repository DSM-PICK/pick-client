import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import AdminNavItem from "./AdminNavItem/AdminNavItem";
import { WhiteLogoPick } from "../../../asset/index";

const AdminNav = () => {
  const [zoomLevel, setZoomLevel] = useState(0);
  const itemDataSets = [
    {
      size: "small",
      text: "동아리",
      link: "/admin/club"
    },
    {
      size: "middle",
      text: "동아리 목록",
      link: "/admin/club/list"
    },
    {
      size: "middle",
      text: "동아리 관리",
      link: "/admin/club/management"
    },
    {
      size: "middle",
      text: "동아리원 관리",
      link: "/admin/club/member"
    }
  ];

  useEffect(() => {
    const zoomLevel = Number(window.localStorage.getItem("zoomLevel")) || 1;
    setZoomLevel(zoomLevel);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("zoomLevel", zoomLevel);
    document.body.style.zoom = zoomLevel;
  }, [zoomLevel]);

  const addZoomLevel = useCallback(() => {
    setZoomLevel(prev => prev + 0.1);
  }, []);

  const minusZoomLevel = useCallback(() => {
    setZoomLevel(prev => prev - 0.1);
  }, []);

  return (
    <S.Container>
      <AdminNavItem
        text={""}
        size={"big"}
        link={"/admin"}
        imgLink={WhiteLogoPick}
        navlink={""}
      />
      {itemDataSets.map(item => (
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
      <S.ButtonWrap>
        <S.Button onClick={addZoomLevel}>+</S.Button>
        <S.Button onClick={minusZoomLevel}>-</S.Button>
      </S.ButtonWrap>
    </S.Container>
  );
};

export default AdminNav;
