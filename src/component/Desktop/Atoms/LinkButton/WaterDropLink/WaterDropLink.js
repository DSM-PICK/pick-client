import React from "react";
import * as S from "./styles";

const WaterDropLink = props => {
  const { img, text, css, path } = props;

  return (
    <S.Container img={img} to={path} {...css}>
      {text}
    </S.Container>
  );
};

export default WaterDropLink;
