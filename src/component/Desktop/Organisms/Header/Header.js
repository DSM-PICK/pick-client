import React from "react";
import { LogoPick } from "../../../../asset";
import Img from "../../Atoms/Img/Img";
import HeaderNavLinkWrap from "../../Molecules/Header/HeaderNavLinkWrap/HeaderNavLinkWrap";
import HeaderUserWrap from "../../Molecules/Header/HeaderUserWrap/HeaderUserWrap";
import * as S from "./styles";

const Header = props => {
  const { userName } = props;

  return (
    <S.Container>
      <S.GridItem />
      <S.ImgWrap>
        <Img src={LogoPick} css={S.ImgCSS} />
      </S.ImgWrap>
      <S.NavLinkWrap>
        <HeaderNavLinkWrap
          css={S.NavLinkCSS}
          activeStyle={S.NavLinkActiveStyle}
        />
      </S.NavLinkWrap>
      <HeaderUserWrap userName={userName} />
      <S.GridItem />
    </S.Container>
  );
};

export default Header;
