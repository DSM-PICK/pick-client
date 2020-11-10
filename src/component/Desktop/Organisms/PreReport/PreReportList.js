import React from "react";
import * as S from "./styles";
import PreReportLabel from "../../Atoms/Label/PreReportLabel/PreReportLabel";
import PreReportWrap from "../../Atoms/Wrap/PreReportWrap/PreReportWrap";
import PreReportListTextWrap from "../../Molecules/Wrap/PreReportListTextWrap/PreReportListTextWrap";

const PreReportList = () => {
  const PreReportWrapCSS = {
    width: "900px",
    height: "700px",
    radiusSize: "40px"
  };

  const HeaderParagraphCSS = {
    padding: "0 0 17px 0",
    color: "#333336",
    fontSize: "15px",
    fontWeight: "bold"
  };
  const HeaderParagraphTexts = {
    stdnum: "학번",
    name: "이름",
    state: "종류",
    during: "결석일자",
    reason: "상세사유"
  };

  const BodyParagraphCSS = {
    padding: "0 0 11px 0",
    color: "#333336",
    fontSize: "16px",
    fontWeight: "normal"
  };
  const BodyParagraphTexts = [
    {
      stdnum: 2202,
      name: "김민석",
      state: "공결",
      during: "11월 9일 4교시 ~ 11월 10일 n교시",
      reason: "1박 2일 영어캠프 참여합니다요하하하"
    },
    {
      stdnum: 2415,
      name: "유시온",
      state: "공결",
      during: "11월 9일 4교시 ~ 11월 10일 n교시",
      reason: "1박 2일 영어캠프 참여합니다요하하하"
    }
  ];

  return (
    <S.Container>
      <PreReportLabel>사전 결석 목록</PreReportLabel>
      <PreReportWrap css={PreReportWrapCSS}>
        <PreReportListTextWrap
          ParagraphCSS={HeaderParagraphCSS}
          ParagraphTexts={HeaderParagraphTexts}
        />
        {BodyParagraphTexts &&
          BodyParagraphTexts.map(data => (
            <PreReportListTextWrap
              key={data.stdnum + data.during}
              ParagraphCSS={BodyParagraphCSS}
              ParagraphTexts={data}
            />
          ))}
      </PreReportWrap>
    </S.Container>
  );
};

export default PreReportList;
