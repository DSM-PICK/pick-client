import React from "react";
import * as S from "./styles";

const Body = props => {
  return <S.Container {...props}>{props.children}</S.Container>;
};

export default Body;
