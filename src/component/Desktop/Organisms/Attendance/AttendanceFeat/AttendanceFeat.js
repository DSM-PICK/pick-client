import React from "react";
import * as S from "./styles";
import PreAbsenceLabel from "../../../Atoms/Label/PreAbsenceLabel/PreAbsenceLabel";
import WaterDropLink from "../../../Atoms/LinkButton/WaterDropLink/WaterDropLink";
import { ClassPng, ClubPng } from "../../../../../asset/index";

const AttendanceFeat = () => {
  const WaterDropLinkCSS = {
    radiussize: "0 30px 0 30px"
  };

  return (
    <S.Container>
      <PreAbsenceLabel text={"출석 하기"} />
      <S.MainWrap>
        <WaterDropLink
          img={ClubPng}
          path={""}
          text={"전공동아리"}
          css={WaterDropLinkCSS}
        />
        <WaterDropLink
          img={ClassPng}
          path={""}
          text={"자율학습"}
          css={WaterDropLinkCSS}
        />
      </S.MainWrap>
    </S.Container>
  );
};

export default AttendanceFeat;
