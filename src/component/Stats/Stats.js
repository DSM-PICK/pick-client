import React from "react";
import * as S from "./styles";
import HeaderOnlyTitle from "../Organisms/Header/HeaderOnlyTitle/HeaderOnlyTitle";
import Footer from "../Organisms/Footer/Footer";

const Stats = () => {
  return (
    <S.Container>
      <HeaderOnlyTitle title={"통계"} />
      <Footer />
    </S.Container>
  );
};

export default Stats;
