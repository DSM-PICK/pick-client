import React from "react";
import DesktopHeaderContainer from "../../../../container/Desktop/Header/DesktopHeaderContainer";
import Stats from "../../Organisms/Stats/Stats";
import * as S from "./style";

const StatsPage = () => {
  return (
    <S.Container>
      <DesktopHeaderContainer />
      <S.StatsWrap>
        <S.StatsGridWrap>
          <Stats />
        </S.StatsGridWrap>
      </S.StatsWrap>
    </S.Container>
  );
};

export default StatsPage;
