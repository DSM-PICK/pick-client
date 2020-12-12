import React from "react";
import * as S from "./styles";
import PreAbsenceLabel from "../../../Atoms/Label/PreAbsenceLabel/PreAbsenceLabel";
import WaterDropWrap from "../../../Atoms/Wrap/WaterDropWrap/WaterDropWrap";
import PreAbsenceListTextWrap from "../../../Molecules/Wrap/PreAbsenceListTextWrap/PreAbsenceListTextWrap";
import PreAbsenceListBtnWrap from "../../../Molecules/Wrap/PreAbsenceListBtnWrap/PreAbsenceBtnWrap";
import SearchWrap from "../../../Molecules/Wrap/SearchWrap/SearchWrap";

const PreAbsenceList = () => {
  const WaterDropWrapCSS = {
    width: "100%",
    height: "100%",
    radiusSize: "40px",
    placeContent: "start stretch"
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
    fontWeight: "500"
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
      <SearchWrap />
      <PreAbsenceLabel text={"사전 결석 목록"} />
      <WaterDropWrap css={WaterDropWrapCSS}>
        <PreAbsenceListTextWrap
          ParagraphCSS={HeaderParagraphCSS}
          ParagraphTexts={HeaderParagraphTexts}
        />
        {BodyParagraphTexts &&
          BodyParagraphTexts.map(data => (
            <PreAbsenceListTextWrap
              key={data.stdnum + data.during}
              ParagraphCSS={BodyParagraphCSS}
              ParagraphTexts={data}
            />
          ))}
        <S.MiddleSetting>
          <PreAbsenceListBtnWrap />
        </S.MiddleSetting>
      </WaterDropWrap>
    </S.Container>
  );
};

export default PreAbsenceList;
