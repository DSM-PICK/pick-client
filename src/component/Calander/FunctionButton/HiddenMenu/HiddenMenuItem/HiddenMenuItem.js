import React from "react";
import HiddenMenu from "../HiddenMenu";
import * as S from "../../styles";

const HiddenMenuItem = ({ content, src, onClick }) => {
  return (
    <S.ButtonWrap>
      <S.MenuText>{content}</S.MenuText>
      <S.MenuButton onClick={onClick}>
        <img src={src} />
      </S.MenuButton>
    </S.ButtonWrap>
  );
};

export default HiddenMenuItem;
