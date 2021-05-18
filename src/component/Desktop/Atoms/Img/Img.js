import React from "react";
import * as S from "./styles";

const Img = props => {
  const { src, css } = props;

  return <S.Container src={src} {...css} />;
};

export default Img;
