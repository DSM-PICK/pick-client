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
  isToday,
  hoverMode,
  activeName,
  onNameClick,
  onNameHover,
  onNameBlur
}) => {
  return (
    <S.Container hover={hoverMode} isActive={isThisMonth}>
      <S.ShowSchedule>
        <S.Date isActive={isToday}>{date}</S.Date>
        <S.Schedule>{scheduleMap[schedule] || "일정 오류"}</S.Schedule>
      </S.ShowSchedule>
      <S.TeacehrWrap>
        <S.TeacerName
          onMouseEnter={
            onNameHover
              ? e =>
                  onNameHover(e, { year, month, date, floor: 4, name: floor4 })
              : undefined
          }
          onMouseLeave={onNameBlur}
          onClick={
            onNameClick
              ? e =>
                  onNameClick(e, { year, month, date, floor: 4, name: floor4 })
              : undefined
          }
          isActive={activeName === floor4}
          redMode={hoverMode}
        >
          {floor4 || "선생님"}
        </S.TeacerName>
        <S.TeacerName
          onMouseEnter={
            onNameHover
              ? e =>
                  onNameHover(e, { year, month, date, floor: 3, name: floor3 })
              : undefined
          }
          onMouseLeave={onNameBlur}
          onClick={
            onNameClick
              ? e =>
                  onNameClick(e, { year, month, date, floor: 3, name: floor3 })
              : undefined
          }
          isActive={activeName === floor3}
          redMode={hoverMode}
        >
          {floor3 || "정보가"}
        </S.TeacerName>
        <S.TeacerName
          onMouseEnter={
            onNameHover
              ? e =>
                  onNameHover(e, { year, month, date, floor: 2, name: floor2 })
              : undefined
          }
          onMouseLeave={onNameBlur}
          onClick={
            onNameClick
              ? e =>
                  onNameClick(e, { year, month, date, floor: 2, name: floor2 })
              : undefined
          }
          isActive={activeName === floor2}
          redMode={hoverMode}
        >
          {floor2 || "없어요"}
        </S.TeacerName>
      </S.TeacehrWrap>
    </S.Container>
  );
};

export default DScheduleItem;
