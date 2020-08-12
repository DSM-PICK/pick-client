import React, { useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import * as S from "./styles";
import { CHANGE_MY_SCHEDULE_STATUS } from "../../../../module/action/calander";
import CalanderAlertTeacherList from "./teacherList/CalanderAlertTeacherList";

const CalanderAlert = () => {
  const state = useSelector((store) => store.calander.state);
  const days = useSelector((store) => store.calander.changeDays);
  const changeScheduleStatus = useSelector(
    (store) => store.calander.changeScheduleStatus
  );

  useEffect(() => {
    console.log("캘린더 얼랏");
  });
  const render = useMemo(() => {
    switch (changeScheduleStatus) {
      case 1: {
        return (
          <S.BottomText>교체를 원하는 내 일정을 선택해 주세요</S.BottomText>
        );
      }
      case 2: {
        const { month, date } = days.first;
        return <S.BottomText>{`${month}월 ${date}일 →`}</S.BottomText>;
      }
      case 3: {
        const { month: month1, date: date1 } = days.first;
        const { month: month2, date: date2, teachers } = days.second;
        return (
          <>
            <S.BottomText>{`${month1}월 ${date1}일 → ${month2}월 ${date2}일`}</S.BottomText>
            <S.TopContainer>
              <S.TopHeader>
                {month2}월 {date2}일
              </S.TopHeader>
              <S.TopBody>
                <CalanderAlertTeacherList teachers={teachers} />
              </S.TopBody>
            </S.TopContainer>
          </>
        );
      }
      case 4: {
        const { month: month1, date: date1 } = days.first;
        const { month: month2, date: date2, teachers } = days.second;

        return (
          <>
            <S.BottomText>{`${month1}월 ${date1}일 → ${month2}월 ${date2}일`}</S.BottomText>
            <S.TopContainer>
              <S.TopHeader>
                {month2}월 {date2}일
              </S.TopHeader>
              <S.TopBody>
                <CalanderAlertTeacherList teachers={teachers} />
              </S.TopBody>
            </S.TopContainer>
          </>
        );
      }
      default: {
        return "";
      }
    }
  }, [changeScheduleStatus, days]);

  return state === CHANGE_MY_SCHEDULE_STATUS ? (
    <S.Container>{render}</S.Container>
  ) : (
    <></>
  );
};

export default CalanderAlert;
