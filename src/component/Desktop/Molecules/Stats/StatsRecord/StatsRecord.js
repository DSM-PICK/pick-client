import React from "react";
import Background from "../../../Atoms/Background/Background";
import Label from "../../../Atoms/Label/Label";
import * as S from "./style";

const StatsRecord = () => {
  return (
    <S.Container>
      <S.LableHeader>
        <Label text={"출결 기록"} css={S.LabelCSS} />
      </S.LableHeader>
      <Background css={S.BackgroundCSS}></Background>
    </S.Container>
  );
};

export default StatsRecord;
