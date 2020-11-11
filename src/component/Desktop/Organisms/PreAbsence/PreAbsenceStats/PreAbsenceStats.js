import React from "react";
import PreAbsenceLabel from "../../../Atoms/Label/PreAbsenceLabel/PreAbsenceLabel";
import PreAbsenceWrap from "../../../Atoms/Wrap/PreAbsenceWrap/PreAbsenceWrap";
import * as S from "./styles";

const PreAbsenceStats = () => {
  const PreAbsenceWrapCSS = {
    width: "500px",
    height: "310px",
    radiusSize: "30px"
  };

  return (
    <S.Container>
      <PreAbsenceLabel text={"사전 결석 통계"} />
      <PreAbsenceWrap css={PreAbsenceWrapCSS}></PreAbsenceWrap>
    </S.Container>
  );
};

export default PreAbsenceStats;
