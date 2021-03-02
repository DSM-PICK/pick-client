import React from "react";
import { useSelector } from "react-redux";
import DScheduleItem from "../../../component/DSchedule/DScheduleItem/DScheduleItem";
import * as S from "../style";

const DScheduleBody = () => {
  const schedules = useSelector(store => store.schedule);
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
        {schedules.map(data => (
          <DScheduleItem {...data} />
        ))}
      </S.DScheduleBody>
    </S.Body>
  );
};

export default DScheduleBody;
