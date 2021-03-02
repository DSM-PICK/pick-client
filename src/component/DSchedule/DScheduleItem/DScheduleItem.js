import React from "react";
import * as S from "./style";

const scheduleMap = {
  "non-schedule": "일정 없음"
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
  year
}) => {
  return (
    <S.Container>
      <S.ShowSchedule>
        <S.Date>{date}</S.Date>
        <S.Schedule>{scheduleMap[schedule] || "오류"}</S.Schedule>
      </S.ShowSchedule>
      <S.TeacehrWrap>
        <S.TeacerName>{floor2 || "선생님"}</S.TeacerName>
        <S.TeacerName>{floor3 || "정보가"}</S.TeacerName>
        <S.TeacerName>{floor4 || "없어요"}</S.TeacerName>
      </S.TeacehrWrap>
    </S.Container>
  );
};

export default DScheduleItem;
