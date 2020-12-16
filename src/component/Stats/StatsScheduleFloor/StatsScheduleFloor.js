import React from "react";
import * as S from "./styles";
import HeaderWithBackBtn from "../../Organisms/Header/HeaderWithBackBtn/HeaderWithBackBtn";
import StatsScheduleBody from "../../Organisms/Body/StatsBody/StatsScheduleBody/StatsScheduleBody";

const StatsScheduleFloor = props => {
  const { link, title } = props;

  return (
    <S.Container>
      <S.HeaderOnlyTitleWrap>
        <HeaderWithBackBtn link={link} title={title} />
      </S.HeaderOnlyTitleWrap>
      <StatsScheduleBody />
    </S.Container>
  );
};

export default StatsScheduleFloor;
