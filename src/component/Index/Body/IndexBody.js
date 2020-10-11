import React, { useState, useCallback, useEffect } from "react";
import TodayTeacher from "./TeacherBox/TodayTeacher";
import IndexCalander from "./Calander/IndexCalander";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { teacherActionCreater } from "../../../module/action/teacher";

const IndexBody = () => {
  const dispatch = useDispatch();

  const [isDays, setIsDays] = useState(true);

  useEffect(() => {
    dispatch(teacherActionCreater.getTeacherTodaySaga());
  }, []);

  const changeIsDays = useCallback(() => {
    setIsDays(prev => !prev);
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
