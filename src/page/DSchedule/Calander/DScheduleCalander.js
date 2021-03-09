import React from "react";
import DScheduleItem from "../../../component/DSchedule/DScheduleItem/DScheduleItem";
import { useSelector } from "react-redux";
import * as S from "../style";

const DScheduleCalander = () => {
  const calander = useSelector(store => store.schedule.calander.calander);
  const nowDateObj = new Date();
  const nowYear = nowDateObj.getFullYear();
  const nowMonth = nowDateObj.getMonth() + 1;
  const nowDate = nowDateObj.getDate();
  return (
    <S.Body>
      <S.DScheduleHeader>
        <S.DScheduleItem>월</S.DScheduleItem>
        <S.DScheduleItem>화</S.DScheduleItem>
        <S.DScheduleItem>수</S.DScheduleItem>
        <S.DScheduleItem>목</S.DScheduleItem>
        <S.DScheduleItem>금</S.DScheduleItem>
      </S.DScheduleHeader>
      <S.DScheduleBody>
        {calander.map(data => (
          <DScheduleItem
            key={`${data.year}-${data.month}-${data.date}`}
            isToday={
              data.year === nowYear &&
              data.month === nowMonth &&
              data.date === nowDate
            }
            {...data}
          />
        ))}
      </S.DScheduleBody>
    </S.Body>
  );
};

export default DScheduleCalander;
