import React from "react";
import * as S from "./styles";
import Header from "../../Organisms/Header/Header";
import PreReportList from "../../Organisms/PreReport/PreReportList";

const Main = () => {
  return (
    <S.Container>
      <Header />
      <S.MainWrap>
        <PreReportList />
      </S.MainWrap>
    </S.Container>
  );
};

export default Main;
