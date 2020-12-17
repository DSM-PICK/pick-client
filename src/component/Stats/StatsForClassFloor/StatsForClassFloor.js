import React from "react";
import * as S from "./styles";
import StatsForClassBody from "../../Organisms/Body/StatsBody/StatsForClassBody/StatsForClassBody";
import HeaderWithBackBtn from "../../Organisms/Header/HeaderWithBackBtn/HeaderWithBackBtn";

const StatsForClassFloor = props => {
  const { link, title } = props;

  return (
    <S.Container>
      <HeaderWithBackBtn link={link} title={title} />
      <StatsForClassBody />
    </S.Container>
  );
};

export default StatsForClassFloor;
