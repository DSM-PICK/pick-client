import React from "react";
import * as S from "./styles";

const Img = ({ img, style }) => {
  return <S.Container src={img} {...style} />;
};

export default Img;
