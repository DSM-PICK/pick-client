import React from "react";
import * as S from "./styles";
import { PrevBtn, NextBtn } from "../../../../../asset/Desktop/index";
import PreReportListBtnImg from "../../Img/PreAbsenceListBtnImg/PreAbsenceListBtnImg";

const PreAbsenceListBtnWrap = () => {
  return (
    <S.Container>
      <PreReportListBtnImg src={PrevBtn} width={"26px"} height={"26px"} />
      <S.Num>{1}</S.Num>
      <PreReportListBtnImg src={NextBtn} width={"26px"} height={"26px"} />
    </S.Container>
  );
};

export default PreAbsenceListBtnWrap;
