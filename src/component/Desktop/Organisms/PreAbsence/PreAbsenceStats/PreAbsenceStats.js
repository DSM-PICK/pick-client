import React from "react";
import PreAbsenceLabel from "../../../Atoms/Label/PreAbsenceLabel/PreAbsenceLabel";
import WaterDropWrap from "../../../Atoms/Wrap/WaterDropWrap/WaterDropWrap";
import * as S from "./styles";

const PreAbsenceStats = () => {
  const WaterDropWrapCSS = {
    width: "100%",
    height: "100%",
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
