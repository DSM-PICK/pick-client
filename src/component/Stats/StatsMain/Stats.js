import React from "react";
import * as S from "./styles";
import HeaderOnlyTitle from "../../Organisms/Header/HeaderOnlyTitle/HeaderOnlyTitle";
import Footer from "../../Organisms/Footer/Footer";
import StatsBody from "../../Organisms/Body/StatsBody/StatsMainBody/StatsBody";

const Stats = props => {
  const { title } = props;

  return (
    <S.Container>
      <S.HeaderOnlyTitleWrap>
        <HeaderOnlyTitle title={title} />
      </S.HeaderOnlyTitleWrap>
      <StatsBody />
      <Footer />
    </S.Container>
  );
};

export default Stats;
