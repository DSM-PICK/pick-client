import React from "react";
import NavLink from "../../../Atoms/NavLink/NavLink";
import * as S from "./styles";

const HeaderNavLinkWrap = props => {
  const { css, activeStyle } = props;

  const HeaderNavLinkList = [
    {
      to: "/",
      text: "출석체크"
    },
    {
      to: "/pre-report",
      text: "출결등록"
    },
    {
      to: "/schedule",
      text: "일정확인"
    },
    {
      to: "/stats",
      text: "출석조회"
    }
  ];

  return (
    <S.Container>
      {HeaderNavLinkList.map(dataObj => (
        <NavLink
          exact={true}
          key={dataObj.text}
          {...dataObj}
          css={css}
          activeStyle={activeStyle}
        />
      ))}
    </S.Container>
  );
};

export default HeaderNavLinkWrap;
