import React from "react";
import { NavLink, Link } from "react-router-dom";
import * as S from "./styles";

const AdminNavItem = (props) => {
  const navSmallStyle = {
    height: "43px",
    background: "#13171a",
  };

  const navMiddleStyle = {
    height: "49px",
    color: "#64b1e7",
    background: "#13171a",
  };

  const navBigStyle = {
    background: "#13171a",
  };

  const navLogoutStyle = {};

  const navStyle = props.navlink
    ? {}
    : props.text === "로그아웃"
    ? navLogoutStyle
    : props.size === "small"
    ? navSmallStyle
    : props.size === "middle"
    ? navMiddleStyle
    : navBigStyle;

  return (
    <S.Container
      as={NavLink}
      exact
      to={props.link}
      activeStyle={navStyle}
      size={props.size}
      text={props.text}
      imglink={props.imgLink}
    >
      {props.text}
    </S.Container>
  );
};

export default AdminNavItem;
