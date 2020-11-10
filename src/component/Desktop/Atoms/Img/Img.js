import React from "react";
import * as S from "./styles";

const Img = props => {
  const { src, width, height } = props;

  return <S.Container src={src} width={width} height={height} />;
};

export default Img;
