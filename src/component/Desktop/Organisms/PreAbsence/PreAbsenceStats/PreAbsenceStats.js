import React from "react";
import PreAbsenceLabel from "../../../Atoms/Label/PreAbsenceLabel/PreAbsenceLabel";
import WaterDropWrap from "../../../Atoms/Wrap/WaterDropWrap/WaterDropWrap";
import * as S from "./styles";

const PreAbsenceStats = () => {
  const WaterDropWrapCSS = {
    width: "500px",
    height: "310px",
    radiusSize: "30px"
  };

  return (
    <S.Container>
      <PreAbsenceLabel text={"사전 결석 통계"} />
      <WaterDropWrap css={WaterDropWrapCSS}></WaterDropWrap>
    </S.Container>
  );
};

export default PreAbsenceStats;
