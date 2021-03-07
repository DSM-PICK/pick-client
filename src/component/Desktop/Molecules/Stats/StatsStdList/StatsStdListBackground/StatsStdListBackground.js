import React from "react";
import * as S from "./style";
import SStdListHeader from "./SStdListHeader/SStdListHeader";
import DSStdListBodyContainer from "../../../../../../container/Desktop/Stats/DSStdListBodyContainer";

const StatsStdListBackground = () => {
  return (
    <S.Container>
      <SStdListHeader />
      <DSStdListBodyContainer />
    </S.Container>
  );
};

export default StatsStdListBackground;
