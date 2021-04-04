import React from "react";
import * as S from "./style";

export const scheduleMap = {
  "non-schedule": "일정 없음",
  club: "동아리",
  "self-study": "자습",
  "after-school": "방과후"
};

const DScheduleItem = ({
  date,
  day,
  floor2,
  floor3,
  floor4,
  isThisMonth,
  month,
  schedule,
  year,
  isToday
}) => {
  return (
    <S.Container isActive={isThisMonth}>
      <S.ShowSchedule>
        <S.Date isActive={isToday}>{date}</S.Date>
        <S.Schedule>{scheduleMap[schedule] || "일정 오류"}</S.Schedule>
      </S.ShowSchedule>
      <S.TeacehrWrap>
        <S.TeacerName>{floor4 || "선생님"}</S.TeacerName>
        <S.TeacerName>{floor3 || "정보가"}</S.TeacerName>
        <S.TeacerName>{floor2 || "없어요"}</S.TeacerName>
      </S.TeacehrWrap>
    </S.Container>
  );
};

export default DScheduleItem;
