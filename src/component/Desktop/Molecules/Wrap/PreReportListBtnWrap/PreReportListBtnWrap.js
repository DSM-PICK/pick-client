import React from "react";
import * as S from "./styles";
import { PrevBtn, NextBtn } from "../../../../../asset/Desktop/index";
import PreReportListBtnImg from "../../Img/PreReportListBtnImg/PreReportListBtnImg";

const PreReportListBtnWrap = () => {
  return (
    <S.Container>
      <PreReportListBtnImg src={PrevBtn} width={"26px"} height={"26px"} />
      <S.NumWithUnderline>{1}</S.NumWithUnderline>
      <PreReportListBtnImg src={NextBtn} width={"26px"} height={"26px"} />
    </S.Container>
  );
};

export default PreReportListBtnWrap;
