import React from "react";
import * as S from "./styles";
import StatsForClassBody from "../../Organisms/Body/StatsBody/StatsForClassBody/StatsForClassBody";
import HeaderWithBackBtn from "../../Organisms/Header/HeaderWithBackBtn/HeaderWithBackBtn";

const StatsSchedule = props => {
  const { link, title } = props;

  return (
    <S.Container>
      <S.HeaderOnlyTitleWrap>
        <HeaderWithBackBtn link={link} title={title} />
      </S.HeaderOnlyTitleWrap>
      <StatsForClassBody />
    </S.Container>
  );
};

export default StatsSchedule;
