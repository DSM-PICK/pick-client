import React from "react";
import Background from "../../../Atoms/Background/Background";
import Label from "../../../Atoms/Label/Label";
import StatsDateBackground from "./StatsDateBackground/StatsDateBackground";
import * as S from "./style";

const StatsDate = () => {
  return (
    <S.Container>
      <S.LableHeader>
        <Label text={"날짜 선택"} css={S.LabelCSS} />
      </S.LableHeader>
      <Background css={S.BackgroundCSS}>
        <StatsDateBackground />
      </Background>
    </S.Container>
  );
};

export default StatsDate;
