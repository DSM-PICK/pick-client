import React from "react";
import HeaderImg from "../../Molecules/Img/HeaderImg/HeaderImg";
import LinkWrap from "../../Molecules/Wrap/LinkWrap/LinkWrap";
import * as S from "./styles";
import UserWrap from "./UserWrap/UserWrap";

const Header = () => {
  const initValue = [
    {
      text: "출석 하기",
      path: "/attendance"
    },
    {
      text: "사전 결석",
      path: "/pre-absence"
    },
    {
      text: "출석 통계",
      path: "/stats"
    },
    {
      text: "동아리",
      path: "/club"
    }
  ];

  const HeaderLinkButtonCss = {
    flex: "1",
    color: "#ffffff",
    fontWeight: "bold"
  };

  return (
    <S.Container>
      <HeaderImg />
      <S.Wrap>
        <LinkWrap
          LinkButtonData={initValue}
          LinkButtonCss={HeaderLinkButtonCss}
        />
        <UserWrap />
      </S.Wrap>
    </S.Container>
  );
};

export default Header;
