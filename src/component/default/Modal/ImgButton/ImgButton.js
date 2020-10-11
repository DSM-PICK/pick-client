import React from "react";
import { whiteIcon } from "../../../../asset";
import * as S from "./style";

const ImgButton = ({ active, imgSrc, color, children, onClick, shadow }) => {
  return (
    <S.Container
      color={color}
      onClick={onClick}
      shadow={shadow}
      active={active}
    >
      <img src={active ? whiteIcon : imgSrc} />
      <div>{children}</div>
    </S.Container>
  );
};

export default ImgButton;
