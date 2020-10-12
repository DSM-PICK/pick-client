import React from "react";
import * as S from "./styles";

const Body = props => {
  return <S.Container height={props.height}>{props.children}</S.Container>;
};

export default Body;
