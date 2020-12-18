import React from "react";
import * as S from "./styles";
import { Link as L } from "react-router-dom";

const Link = ({ to, text, style }) => {
  return (
    <S.Link as={L} to={to} {...style}>
      {text}
    </S.Link>
  );
};

export default Link;
