import React, { useEffect } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { selectSecondDayTeacher } from "../../../../../module/action/calander";

const CalanderAlertTeacherList = ({ teachers }) => {
  useEffect(() => {
    console.log("캘린더 얼랏 리스트");
  });
  const [floor2, floor3, floor4] = teachers;
  const dispatch = useDispatch();

  const onClick = (payload) => {
    dispatch(selectSecondDayTeacher(payload));
  };

  return (
    <>
      <S.TopTeacherItem
        onClick={() => onClick({ name: floor2.name, floor: floor2.floor })}
      >
        <p>2층</p>
        <p>{floor2.name}</p>
      </S.TopTeacherItem>
      <S.TopTeacherItem
        onClick={() => onClick({ name: floor3.name, floor: floor3.floor })}
      >
        <p>3층</p>
        <p>{floor3.name}</p>
      </S.TopTeacherItem>
      <S.TopTeacherItem
        onClick={() => onClick({ name: floor4.name, floor: floor4.floor })}
      >
        <p>4층</p>
        <p>{floor4.name}</p>
      </S.TopTeacherItem>
    </>
  );
};

export default CalanderAlertTeacherList;
