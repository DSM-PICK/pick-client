import React from "react";
import * as S from "./styles";
import { FooterNav } from "../Constant";
import { NavLink } from "react-router-dom";
import {
  BugReportIcon,
  BugReportOnIcon,
  CalendarIcon,
  CalendarOnIcon,
  HomeIcon,
  HomeOnIcon,
  AdminIcon,
  AdminOnIcon
} from "../../../asset";
const checkPath = pathname => {
  return pathname === "/t/main" ||
    pathname === "/t/attendance/class" ||
    pathname === "/t/attendance/club"
    ? 0
    : location.pathname === "/t/schedule"
    ? 1
    : location.pathname === "/t/bugreport"
    ? 2
    : location.pathname === "/t/admin"
    ? 3
    : -1;
};

const NavFooter = ({ location }) => {
  const linkIndex = checkPath(location.pathname);

  const imgArr = [
    [HomeIcon, HomeOnIcon],
    [CalendarIcon, CalendarOnIcon],
    [BugReportIcon, BugReportOnIcon],
    [AdminIcon, AdminOnIcon]
  ];

  return (
    <S.Container>
      {linkIndex !== -1 &&
        FooterNav.map((footerItem, index) =>
          linkIndex === index ? (
            <S.FooterNavItem
              key={imgArr[index][1]}
              as={NavLink}
              to={{ pathname: footerItem.link, state: { indexNum: index } }}
            >
              <S.FooterNavImg src={imgArr[index][1]} />
              <S.FooterNavText here={true}>{footerItem.text}</S.FooterNavText>
            </S.FooterNavItem>
          ) : (
            <S.FooterNavItem
              key={imgArr[index][0]}
              as={NavLink}
              to={{ pathname: footerItem.link, state: { indexNum: index } }}
            >
              <S.FooterNavImg  src={imgArr[index][0]} />
              <S.FooterNavText here={false}>{footerItem.text}</S.FooterNavText>
            </S.FooterNavItem>
          )
        )}
    </S.Container>
  );
};

export default NavFooter;
