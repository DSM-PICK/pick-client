import React from "react";
import { NavLink } from "react-router-dom";
import { Logout } from "../../../../lib/requestApi";
import * as S from "./styles";

const AdminNavItem = props => {
  const { link, size, text, imgLink } = props;

  const navSmallStyle = {
    height: "43px",
    background: "#13171a"
  };

  const navMiddleStyle = {
    height: "49px",
    color: "#64b1e7",
    background: "#13171a"
  };

  const navBigStyle = {
    background: "#13171a"
  };

  const navLogoutStyle = {};

  const navStyle = props.navlink
    ? {}
    : props.withoutActiveStyle
    ? {}
    : props.text === "로그아웃"
    ? navLogoutStyle
    : props.size === "small"
    ? navSmallStyle
    : props.size === "middle"
    ? navMiddleStyle
    : navBigStyle;

  const onClick = () => {
    props.text === "로그아웃" && Logout("admin");
  };

  return (
    <S.Container
      onClick={onClick}
      as={NavLink}
      exact
      to={link}
      size={size}
      text={text}
      activeStyle={navStyle}
      link={imgLink}
    >
      {text}
    </S.Container>
  );
};

export default AdminNavItem;
