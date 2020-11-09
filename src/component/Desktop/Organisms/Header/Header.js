import React from "react";
import LinkWrap from "../../Molecules/LinkWrap/LinkWrap";
import * as S from "./styles";

const Header = () => {
  const initValue = [
    {
      text: "출석 하기",
      path: "/attendance"
    },
    {
      text: "결석 신고",
      path: "/somepath"
    },
    {
      text: "출석 통계",
      path: "/tonggei"
    },
    {
      text: "동아리",
      path: "/club"
    }
  ];

  const HeaderLinkButtonCss = {
    width: "82px",
    height: "34px"
  };

  return (
    <S.Container>
      <LinkWrap
        LinkButtonData={initValue}
        LinkButtonCss={HeaderLinkButtonCss}
      />
    </S.Container>
  );
};

export default Header;
