import React from "react";
import HeaderWithBackBtn from "../../Organisms/Header/HeaderWithBackBtn/HeaderWithBackBtn";
import * as S from "./styles";

const StatsForClass = () => {
  return (
    <S.Container>
      <HeaderWithBackBtn link={"/t/stats"} title={"반별 통계"} />
    </S.Container>
  );
};

export default StatsForClass;
