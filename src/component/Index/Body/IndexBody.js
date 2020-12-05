import React, { useState, useCallback, useEffect } from "react";
import TodayTeacher from "./TeacherBox/TodayTeacher";
import IndexCalander from "./Calander/IndexCalander";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { teacherActionCreater } from "../../../module/action/teacher";

const IndexBody = () => {
  const dispatch = useDispatch();

  const [isDays, setIsDays] = useState(true);
  const { floor2, floor3, floor4 } = useSelector(state => state.teacher.today);
  const isNormal = !floor2.includes("null");

  useEffect(() => {
    dispatch(teacherActionCreater.getTeacherTodaySaga());
    dispatch(teacherActionCreater.getTeacherWeekSaga());
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
          <TodayTeacher floor={2} teacher={isNormal ? floor2 : "선생님"} />
          <TodayTeacher floor={3} teacher={isNormal ? floor3 : "정보가"} />
          <TodayTeacher floor={4} teacher={isNormal ? floor4 : "없어요"} />
        </S.TeacherBoxWrap>
      ) : (
        <IndexCalander />
      )}
    </S.Container>
  );
};

export default IndexBody;
