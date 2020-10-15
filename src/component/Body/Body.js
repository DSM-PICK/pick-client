import React from "react";
import * as S from "./styles";

const Body = props => {
  console.log(props.ismain);
  return <S.Container ismain={props.ismain}>{props.children}</S.Container>;
};

export default Body;
