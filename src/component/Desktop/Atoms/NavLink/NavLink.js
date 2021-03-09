import React from "react";
import * as S from "./styles";

const NavLink = props => {
  const { exact, text, to, css, activeStyle } = props;

  return (
    <S.Container exact={exact} to={to} activeStyle={activeStyle} {...css}>
      {text}
    </S.Container>
  );
};

export default NavLink;
