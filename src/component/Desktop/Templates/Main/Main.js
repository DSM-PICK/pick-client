import React from "react";
import * as S from "./styles";
import Header from "../../Organisms/Header/Header";
import PreAbsenceReport from "../../Organisms/PreAbsence/PreAbsenceReport/PreAbsenceReport";
import PreAbsenceList from "../../Organisms/PreAbsence/PreAbsenceList/PreAbsenceList";
import PreAbsenceStats from "../../Organisms/PreAbsence/PreAbsenceStats/PreAbsenceStats";

const Main = () => {
  return (
    <S.Container>
      <Header />
      <S.MainWrap>
        <PreAbsenceList />
        <S.SubWrap>
          <PreAbsenceReport />
          <PreAbsenceStats />
        </S.SubWrap>
      </S.MainWrap>
    </S.Container>
  );
};

export default Main;
