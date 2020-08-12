import React, { useCallback } from "react";
import * as S from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {
  SHOW_MY_SCHEDULE_STATUS,
  CHANGE_MY_SCHEDULE_STATUS,
  selectFirstDaySaga,
  selectSecondDay,
} from "../../../../../../module/action/calander";

const CalanderItem = ({ isActive, date, month, teachers }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.calander.state);
  const todayTeacher = useSelector((state) => state.calander.todayTeacher);
  const changeScheduleStatus = useSelector(
    (state) => state.calander.changeScheduleStatus
  );

  const onClick = useCallback(() => {
    if (state !== CHANGE_MY_SCHEDULE_STATUS) {
      return;
    }
    if (changeScheduleStatus === 1) {
      dispatch(selectFirstDaySaga({ month, date, teachers }));
    } else if (changeScheduleStatus === 2) {
      dispatch(selectSecondDay({ month, date, teachers }));
    }
  }, [state, changeScheduleStatus, dispatch]);

  const [floor2, floor3, floor4] = teachers;

  return (
    <S.Container isActive={isActive} onClick={onClick}>
      <S.Header>{date}</S.Header>
      <S.Body>
        <S.TeacherName
          isActive={
            state === SHOW_MY_SCHEDULE_STATUS && todayTeacher === floor2.name
          }
        >
          {floor2.name}
        </S.TeacherName>
        <S.TeacherName
          isActive={
            state === SHOW_MY_SCHEDULE_STATUS && todayTeacher === floor3.name
          }
        >
          {floor3.name}
        </S.TeacherName>
        <S.TeacherName
          isActive={
            state === SHOW_MY_SCHEDULE_STATUS && todayTeacher === floor4.name
          }
        >
          {floor4.name}
        </S.TeacherName>
      </S.Body>
    </S.Container>
  );
};

export default CalanderItem;
