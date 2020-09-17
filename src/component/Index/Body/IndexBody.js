import React, { useState, useCallback } from "react";
import TodayTeacher from "./TeacherBox/TodayTeacher";
import IndexCalander from "./Calander/IndexCalander";
import * as S from "./styles";

const IndexBody = () => {
  const [isDays, setIsDays] = useState(true);

  const changeIsDays = useCallback(() => {
    setIsDays((prev) => !prev);
  }, []);

  return (
    <S.Container>
      <S.SwitchWrap>
        <S.SwitchItem onClick={changeIsDays} isActive={isDays}>
          일간
        </S.SwitchItem>
        <S.hr />
        <S.SwitchItem onClick={changeIsDays} isActive={!isDays}>
          주간
        </S.SwitchItem>
      </S.SwitchWrap>
      {isDays ? (
        <S.TeacherBoxWrap>
          <TodayTeacher />
          <TodayTeacher />
          <TodayTeacher />
        </S.TeacherBoxWrap>
      ) : (
        <IndexCalander />
      )}
    </S.Container>
  );
};

export default IndexBody;
