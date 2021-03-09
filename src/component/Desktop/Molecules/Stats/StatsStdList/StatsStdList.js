import React from "react";
import Background from "../../../Atoms/Background/Background";
import Label from "../../../Atoms/Label/Label";
import StatsStdListBackground from "./StatsStdListBackground/StatsStdListBackground";
import * as S from "./style";

const StatsStdList = () => {
  return (
    <S.Container>
      <S.LableHeader>
        <Label text={"학생 목록"} css={S.LabelCSS} />
      </S.LableHeader>
      <Background css={S.BackgroundCSS}>
        <StatsStdListBackground />
      </Background>
    </S.Container>
  );
};

export default StatsStdList;
