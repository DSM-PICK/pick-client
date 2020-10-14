import React from "react";
import * as S from "./styles";
import { FooterNav } from "../Constant";
import { NavLink, Redirect } from "react-router-dom";
import {
  BugReportIcon,
  BugReportOnIcon,
  CalendarIcon,
  CalendarOnIcon,
  HomeIcon,
  HomeOnIcon,
  TonggeiIcon,
  TonggeiOnIcon
} from "../../../asset";
const checkPath = pathname => {
  return pathname === "/main" ||
    pathname === "/attendance/class" ||
    pathname === "/attendance/club"
    ? 0
    : location.pathname === "/schedule"
    ? 1
    : location.pathname === "/bugreport"
    ? 2
    : location.pathname === "/tonggei"
    ? 3
    : -1;
};

const NavFooter = ({ location }) => {
  const linkIndex = checkPath(location.pathname);

  const imgArr = [
    [HomeIcon, HomeOnIcon],
    [CalendarIcon, CalendarOnIcon],
    [BugReportIcon, BugReportOnIcon],
    [TonggeiIcon, TonggeiOnIcon]
  ];

  return (
    <S.Container>
      {linkIndex !== -1 ? (
        FooterNav.map((footerItem, index) =>
          linkIndex === index ? (
            <S.FooterNavItem
              key={imgArr[index][1]}
              as={NavLink}
              to={{ pathname: footerItem.link, state: { indexNum: index } }}
              imgonlink={imgArr[index][1]}
            />
          ) : (
            <S.FooterNavItem
              key={imgArr[index][0]}
              as={NavLink}
              to={{ pathname: footerItem.link, state: { indexNum: index } }}
              imglink={imgArr[index][0]}
            />
          )
        )
      ) : (
        <Redirect to="/main" />
      )}
    </S.Container>
  );
};

export default NavFooter;
