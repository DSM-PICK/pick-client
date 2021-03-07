import React from "react";
import * as S from "./styles";

const NavLink = props => {
  const { text, to, css, activeStyle } = props;

  return (
    <S.Container to={to} activeStyle={activeStyle} {...css}>
      {text}
    </S.Container>
  );
};

export default NavLink;
