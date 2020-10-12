import React, { useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import * as S from "./styles";
import { CHANGE_MY_SCHEDULE_STATUS } from "../../module/action/calander";
import CalanderAlertTeacherList from "./teacherList/CalanderAlertTeacherList";
import CalanderConfirmChangeTeacher from "./confirm/CalanderConfirmChangeTeacher";
import BottomAlert from "./BottomAlert/BottomAlert";

const CalanderAlert = () => {
  const state = useSelector(store => store.calander.state);
  const days = useSelector(store => store.calander.changeDays);
  const changeScheduleStatus = useSelector(
    store => store.calander.changeScheduleStatus
  );

  const render = useMemo(() => {
    switch (changeScheduleStatus) {
      case 1: {
        return <BottomAlert>교체를 원하는 내 일정을 선택해 주세요</BottomAlert>;
      }
      case 2: {
        const { month, date } = days.first;
        return <BottomAlert>{`${month}월 ${date}일 →`}</BottomAlert>;
      }
      case 3: {
        const { month: month1, date: date1 } = days.first;
        const { month: month2, date: date2, teachers } = days.second;
        return (
          <>
            <BottomAlert>{`${month1}월 ${date1}일 → ${month2}월 ${date2}일`}</BottomAlert>
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
        const { first, second } = days;
        return (
          <CalanderConfirmChangeTeacher firstDay={first} secondDay={second} />
        );
      }
      default: {
        return "";
      }
    }
  }, [changeScheduleStatus, days]);

  return state === CHANGE_MY_SCHEDULE_STATUS ? render : <></>;
};

export default CalanderAlert;
