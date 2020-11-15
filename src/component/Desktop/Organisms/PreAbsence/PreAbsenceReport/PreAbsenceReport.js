import React from "react";
import * as S from "./styles";
import PreAbsenceLabel from "../../../Atoms/Label/PreAbsenceLabel/PreAbsenceLabel";
import PreReportLabel from "../../../Atoms/Label/PreAbsenceLabel/PreAbsenceLabel";
import PreReportWrap from "../../../Atoms/Wrap/PreAbsenceWrap/PreAbsenceWrap";

const PreAbsenceReport = () => {
  const PreReportWrapCSS = {
    width: "500px",
    height: "310px",
    radiusSize: "30px",
    setGird: true,
    gridRow: "7fr 8fr",
    gridCol: "2fr 3fr"
  };

  const PreAbsenceLabelCSS = {
    margin: "0",
    fontSize: "15px",
    textAlign: "center"
  };

  return (
    <S.Container>
      <PreReportLabel text={"사전 결석 신고"} />
      <PreReportWrap css={PreReportWrapCSS}>
        <S.LeftWrap>
          <PreAbsenceLabel text={"결석자"} css={PreAbsenceLabelCSS} />
        </S.LeftWrap>
        <S.RightTopWrap>
          <PreAbsenceLabel text={"종류"} css={PreAbsenceLabelCSS} />
        </S.RightTopWrap>
        <S.RightBottomWrap>
          <PreAbsenceLabel text={"사전 결석 통계"} css={PreAbsenceLabelCSS} />
        </S.RightBottomWrap>
      </PreReportWrap>
    </S.Container>
  );
};

export default PreAbsenceReport;
