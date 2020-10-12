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
          <TodayTeacher floor={2} teacher={floor2} />
          <TodayTeacher floor={3} teacher={floor3} />
          <TodayTeacher floor={4} teacher={floor4} />
        </S.TeacherBoxWrap>
      ) : (
        <IndexCalander />
      )}
    </S.Container>
  );
};

export default IndexBody;
