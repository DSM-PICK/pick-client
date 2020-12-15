import React from "react";
import * as S from "./styles";
import HeaderOnlyTitle from "../../Organisms/Header/HeaderOnlyTitle/HeaderOnlyTitle";
import Footer from "../../Organisms/Footer/Footer";
import StatsBody from "../../Organisms/Body/StatsBody/StatsBody";

const Stats = () => {
  return (
    <S.Container>
      <HeaderOnlyTitle title={"통계"} />
      <StatsBody />
      <Footer />
    </S.Container>
  );
};

export default Stats;
