import React from "react";
import DScheduleHeader from "./Header/DScheduleHeader";
import DScheduleBody from "./Body/DScheduleBody";
import * as S from "./style";

const DSchedulePage = () => {
  return (
    <S.Container>
      <S.GlobalStyle />
      <DScheduleHeader />
      <DScheduleBody />
    </S.Container>
  );
};

export default DSchedulePage;
