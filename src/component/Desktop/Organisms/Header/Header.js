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
    width: "88px",
    height: "43px",
    color: "#000000",
    fontWeight: "bold",
    radiusSize: "14px",
    boxShadow:
      "inset 5px 5px 13px 0px rgba(215, 215, 215, 0.9), inset -5px -5px 10px 0px rgba(255, 255, 255, 0.9), inset 5px -5px 10px 0px rgba(215, 215, 215, 0.2), inset -5px 5px 10px 0px rgba(215, 215, 215, 0.2), -1px -1px 2px 0px rgba(215, 215, 215, 0.5), 1px 1px 2px 0px rgba(255, 255, 255, 0.3)",
    background: "#efefef"
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
