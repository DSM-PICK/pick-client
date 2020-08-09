import React, { useEffect } from "react";
import * as S from "./styles";
import { useSelector } from "react-redux";

const CalanderItem = ({ isActive, date, month }) => {
  // const { date: nowDate, month: nowMonth } = useSelector((state) => state.date);
  const { state, focusTeacher } = useSelector((state) => state.calander);

  useEffect(() => {
    console.log("랜더링");
  });

  return (
    <S.Container isActive={isActive}>
      <S.Header>{date}</S.Header>
      <S.Body>
        <S.TeacherName
          isActive={state === "SHOW_MY_SCHEDULE" && focusTeacher === "오유신"}
        >
          오유신
        </S.TeacherName>
        <S.TeacherName
          isActive={state === "SHOW_MY_SCHEDULE" && focusTeacher === "안현수"}
        >
          안현수
        </S.TeacherName>
        <S.TeacherName
          isActive={state === "SHOW_MY_SCHEDULE" && focusTeacher === "김정은"}
        >
          김정은
        </S.TeacherName>
      </S.Body>
    </S.Container>
  );
};

export default CalanderItem;
