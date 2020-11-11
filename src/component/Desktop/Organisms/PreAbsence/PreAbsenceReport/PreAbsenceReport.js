import React from "react";
import PreReportLabel from "../../../Atoms/Label/PreAbsenceLabel/PreAbsenceLabel";
import PreReportWrap from "../../../Atoms/Wrap/PreAbsenceWrap/PreAbsenceWrap";
import * as S from "./styles";

const PreAbsenceReport = () => {
  const PreReportWrapCSS = {
    width: "500px",
    height: "310px",
    radiusSize: "30px"
  };

  return (
    <S.Container>
      <PreReportLabel text={"사전 결석 신고"} />
      <PreReportWrap css={PreReportWrapCSS}></PreReportWrap>
    </S.Container>
  );
};

export default PreAbsenceReport;
