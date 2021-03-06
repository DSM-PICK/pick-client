import React from "react";
import DSPlaceBackgrondContainer from "../../../../../container/Desktop/Stats/DSPlaceBackgrondContainer";
import Background from "../../../Atoms/Background/Background";
import Label from "../../../Atoms/Label/Label";
import * as S from "./style";

const StatsPlace = () => {
  return (
    <S.Container>
      <S.LableHeader>
        <Label text={"교실 선택"} css={S.LabelCSS} />
      </S.LableHeader>
      <Background css={S.BackgroundCSS}>
        <DSPlaceBackgrondContainer />
      </Background>
    </S.Container>
  );
};

export default StatsPlace;
