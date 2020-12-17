import React from "react";
import * as S from "./styles";
import HeaderWithBackBtn from "../../Organisms/Header/HeaderWithBackBtn/HeaderWithBackBtn";
import StatsScheduleBody from "../../Organisms/Body/StatsBody/StatsScheduleBody/StatsScheduleBody";

const StatsScheduleFloor = props => {
  const { link, title } = props;

  return (
    <S.Container>
      <HeaderWithBackBtn link={link} title={title} />
      <StatsScheduleBody />
    </S.Container>
  );
};

export default StatsScheduleFloor;
