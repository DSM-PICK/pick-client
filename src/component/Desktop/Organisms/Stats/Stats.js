import React from "react";
import * as S from "./style";
import StatsDate from "../../Molecules/Stats/StatsDate/StatsDate";
import StatsPlace from "../../Molecules/Stats/StatsPlace/StatsPlace";
import StatsRecord from "../../Molecules/Stats/StatsRecord/StatsRecord";
import StatsStdList from "../../Molecules/Stats/StatsStdList/StatsStdList";

const Stats = () => {
  return (
    <S.Container>
      <S.LeftGridWrap>
        <S.LeftAdditionalGridWrap>
          <StatsDate />
          <StatsPlace />
        </S.LeftAdditionalGridWrap>
        <StatsRecord />
      </S.LeftGridWrap>
      <S.RightWrap>
        <StatsStdList />
      </S.RightWrap>
    </S.Container>
  );
};

export default Stats;
